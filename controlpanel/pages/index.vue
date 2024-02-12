<template>
<v-app id="inspire">
    <v-app-bar>
		<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

		<v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
	v-model="drawer"
	temporary
    >
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
		<!-- <v-container>
			<v-row>
				<template v-for="n in 4" :key="n">
					<v-col
					class="mt-2"
					cols="12"
					>
					<strong>Category {{ n }}</strong>
					</v-col>

					<v-col
					v-for="j in 6"
					:key="`${n}${j}`"
					cols="6"
					md="2"
					>
					<v-sheet height="150"></v-sheet>
					</v-col>
				</template>
			</v-row>
		</v-container> -->
    </v-main>
</v-app>
</template>

<script setup>
import { ref } from 'vue'
import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

const drawer = ref(null)

const db = getFirestore();
const test = async () => {
  const q = query(collection(db, "users"), where("admin", "==", true));
  const querySnapshot = await getDocs(q);
  console.log("querySnapshot=", querySnapshot.docs[0].data().uid);
};
test();
</script>
<style scoped>
</style>
