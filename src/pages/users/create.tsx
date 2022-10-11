import {
  Box,
  Divider,
  Flex,
  Heading,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { useRouter } from "next/router";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";
import { useCallback, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../services/firebase";
import { GetServerSideProps } from "next";
import { api } from "../../services/api";


type CreateClientFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};



const createUserFormSchma = yup.object().shape({
  //name: yup.string().required("Nome obrigatório"),
  /* email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"), */
});

export default function CreateUser({customer}) {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "customer");


  console.log(customer.map((user) => user.name))

useEffect(() => {
  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  getUsers();
}, []);

  async function handleCreateUser(client: CreateClientFormData){
    try {
      await api.post("/api/createCustomer", {
        name: client.name,
        age: client.email,

      });
    } catch (error) {
      console.log("Erro ao enviar mensagem");
    } finally {
      console.log("Mensagem enviada com sucesso!");
    }

  };

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchma),
  });

  const { errors } = formState;

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Adicionar Cliente
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="248px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome completo"
                error={errors.name}
                {...register("name")}
              />
              <Input
                name="age"
                type="age"
                label="age"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="248px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="Password"
                label="Senha"
                error={errors.password}
                {...register("password")}
              />

              <Input
                name="password_confirmation"
                type="Password"
                label="Confirmação de senha"
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                bg="yellow.500"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const usersCollectionRef = collection(db, "customer");
    const data = await getDocs(usersCollectionRef);
    const client = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

  return {
    props: {
      customer: client,
    },
  };
};