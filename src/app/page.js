"use client";

import SkeletonLoading from "@/components/SkeletonLoading";
import TablePost from "@/components/TablePost";
import {
  createPostData,
  deletePostData,
  editPostData,
  fetchPostData,
} from "@/utils";
import { Text, Box, Button, Flex, Container } from "@chakra-ui/react";
import { useQuery, useMutation } from "react-query";
import { initialTablePost } from "@/utils/tablePost";
import ModalDelete from "@/components/ModalDelete";
import { useEffect, useState } from "react";
import ModalAddPost from "@/components/ModalAddPost";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import ModalEditPost from "@/components/ModalEditPost";
import { useRouter } from "next/navigation";
import DrawerDetail from "./../components/DrawerDetail";

export default function Home() {
  // REACT HOOK FORM INIT
  const reactHookForm = useForm();

  // STATE
  const [dataPost, setDataPost] = useState([]);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [isModalCreate, setIsModalCreate] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dataDeleteSelected, setDataDeleteSelected] = useState({});
  const [dataEditSelected, setDataEditSelected] = useState({});
  const [dataDetailSelected, setDataDetailSelected] = useState({});

  // HANDLE FETCH REACT QUERY
  const { isLoading, data, isError, error } = useQuery(
    "post-data",
    fetchPostData
  );
  const createPost = useMutation({
    mutationFn: (payload) => createPostData(payload),
    onSuccess: (newPost) => {
      let tempData = dataPost;
      tempData.unshift(newPost.data);
      setDataPost(tempData);
      reactHookForm.reset();
      setIsModalCreate(!isModalCreate);
    },
  });

  const editPost = useMutation({
    mutationFn: (data) => editPostData(data),
    onSuccess: (newPost) => {
      const index = dataPost.findIndex((x) => x.id === newPost.data.id);
      let changeData = {
        ...dataPost[index],
        title: newPost.data.title,
        body: newPost.data.body,
        userId: newPost.data.userId,
      };

      let tempDataPost = dataPost;
      tempDataPost[index] = changeData;

      setDataPost(tempDataPost);
      reactHookForm.reset();
      setIsModalEdit(!isModalEdit);
    },
  });

  const deletePost = useMutation((id) => deletePostData(id));

  // EFFECT
  useEffect(() => {
    setDataPost(data ? data.data : []);
  }, [data]);

  // FUNCTION MODAL
  const handleModalCreate = () => {
    setIsModalCreate(!isModalCreate);
  };

  const handleAddPost = () => {
    const { getValues } = reactHookForm;
    const payload = {
      title: getValues("title"),
      body: getValues("body"),
      userId: Number(getValues("userId")),
    };
    createPost.mutate(payload);
  };

  const handleModalEdit = () => {
    setIsModalEdit(!isModalEdit);
  };

  const handleEditPost = () => {
    const { getValues } = reactHookForm;

    const id = dataEditSelected.id;
    const payload = {
      title: getValues("title"),
      body: getValues("body"),
      userId: Number(getValues("userId")),
    };

    editPost.mutate({ id, payload });
  };

  const handleModalDelete = () => {
    setIsModalDelete(!isModalDelete);
  };

  const router = useRouter();
  const actionRow = (type, data) => {
    const { setValue } = reactHookForm;

    if (type === "delete") {
      setDataDeleteSelected(data);
      setIsModalDelete(!isModalDelete);
    } else if (type === "edit") {
      setValue("title", data.title);
      setValue("userId", data.userId);
      setValue("body", data.body);

      setDataEditSelected(data);
      setIsModalEdit(!isModalEdit);
    } else if (type === "detail") {
      if (Number(data.id) > 100) {
        setDataDetailSelected({ title: data.title, body: data.body });
        setIsDrawerOpen(!isDrawerOpen);
      } else {
        router.push(`/post-detail/${data.id}`);
      }
    }
  };

  const handleDeletePost = () => {
    deletePost.mutate(dataDeleteSelected.id);
    setDataPost(dataPost.filter((x) => x.id !== dataDeleteSelected.id));
    setIsModalDelete(!isModalDelete);
  };

  const handleOpenDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // PAGE CONDITION
  if (isLoading) {
    return <SkeletonLoading />;
  }

  if (isError) {
    return <Text fontSize="4xl">{error.message}</Text>;
  }

  return (
    <Container maxW="4.xl" p={4}>
      <Box p={24}>
        <Text mb={20} style={{ textAlign: "center" }} fontSize="4xl">
          POSTS JSON PLACEHOLDER
        </Text>
        <Flex justify="end" mb={10}>
          <Button onClick={handleModalCreate} colorScheme="whatsapp">
            CREATE POST
          </Button>
        </Flex>
        <TablePost
          columns={initialTablePost(actionRow)}
          data={dataPost.length > 0 ? dataPost : []}
        />
        <ModalDelete
          isOpen={isModalDelete}
          handleDelete={handleDeletePost}
          onOpen={handleModalDelete}
        />
        <ModalAddPost
          isOpen={isModalCreate}
          onClose={handleModalCreate}
          handleAddPost={handleAddPost}
          hookForm={reactHookForm}
        />
        <ModalEditPost
          isOpen={isModalEdit}
          onClose={handleModalEdit}
          handleEditPost={handleEditPost}
          hookForm={reactHookForm}
        />
        <DrawerDetail
          isOpen={isDrawerOpen}
          onClose={handleOpenDrawer}
          title={dataDetailSelected.title}
          body={dataDetailSelected.body}
        />

        <DevTool control={reactHookForm.control} />
      </Box>
    </Container>
  );
}
