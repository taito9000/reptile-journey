import { initializeApp } from "firebase/app";
import { defineNuxtPlugin } from "#app";
import "firebase/firestore";


export default defineNuxtPlugin(() => {
	
  const config = useRuntimeConfig().public;

  const firebaseConfig: any = {
    apiKey: config.ApiKey,
    authDomain: config.AuthDomain,
    projectId: config.projectId,
    storageBucket: config.StorageBucket,
    messagingSenderId: config.MessagingSenderId,
    appId: config.AppId,
    measurementId: config.MeasurementId,
  };
  const app = initializeApp(firebaseConfig);
});
