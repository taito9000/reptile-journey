<!-- <template>
  <div>index.vue!!!</div>
</template>
<script setup>

import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

const db = getFirestore();
const test = async () => {
  const q = query(collection(db, "users"), where("admin", "==", true));
  const querySnapshot = await getDocs(q);
  console.log("querySnapshot=", querySnapshot.docs[0].data().uid);
};
test();
</script>
<style scoped></style> -->

<template>
  <div>
      <h1>content page</h1>
      <p>uid :{{ user?.uid }}</p>
      <p>email : {{ user?.email }}</p>
      <p>displayName : {{ user?.displayName }}</p>
      <button @click="logout">logut</button>
  </div>
</template>
<script setup lang="ts">
import { useAuth } from "../composables/auth";
import { useUser } from "../composables/user";

const { user } = useUser();

const logout = async (): Promise<void> => {
  await useAuth().signOut();
  await navigateTo('/signIn')
}
</script>

