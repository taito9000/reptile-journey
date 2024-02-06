<template>
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
<style scoped></style>
