// ADD USER

import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import firebase from "./firebase";
import { useState, useEffect } from "react";
import Toastify from "./toastify";

export const AddUser = (info) => {
  const db = getDatabase(firebase);
  //? ferebase tarafında ne isim verdiysek buraya aynısını yazıyoruz.
  const userRef = ref(db, "user/");
  //? dokumantasyonda +userId var, eğer onu yukarıdaki gibi silersek firebase otomatik kendisi uniq ID veriyor.
  const newUserRef = push(userRef);

  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
};

// READ INFO
export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "user/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      //? yukarıdan gelen array bir state atanıyor.
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);
  //? customHook olduğu için return süslü ile yapılıyor.
  return { isLoading, contactList };
};

export const DeleteUser = (id) => {
  const db = getDatabase(firebase);
  // const userRef=ref(db,"user/")
  remove(ref(db, "user/" + id));
  Toastify("Deleted Successfully");
};

export const UpdateUser = (info) => {
  const db = getDatabase(firebase);
  // const userRef=ref(db,"user/")

  const updates = {};
  //? infodan gelen id kullanarak yeni bir kayıt oluşumu önüne geçiliyor, ve üzerine yazıp update yapılıyor.
  updates["user/" + info.id] = info;

  return update(ref(db), updates);
};
