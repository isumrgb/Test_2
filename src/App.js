 import logo from './logo.svg';
 import './App.css';
 import Box from "./Box"
import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function App() {
  // useEffect(() => {
  //   const testFirebaseConnection = async () => {
  //     try {
  //       // 1. Firestore에 유저 한 명 추가
  //       await addDoc(collection(db, "users"), {
  //         name: "김성윤",
  //         grade: "24",
  //         createdAt: new Date()
  //       });
  //       console.log("✅ 사용자 추가 성공!");

  //       // 2. users 컬렉션 전체 가져오기
  //       const querySnapshot = await getDocs(collection(db, "users"));
  //       console.log("📥 Firestore users 컬렉션 전체 목록:");
  //       querySnapshot.forEach((doc) => {
  //         console.log("📌", doc.id, "=>", doc.data());
  //       });

  //     } catch (error) {
  //       console.error("❌ Firebase 연결 실패:", error);
  //     }
  //   };

  //   testFirebaseConnection();
  // }, []);

  return (
    // <div style={{ padding: "20px" }}>
    //   <h1>Firebase 연결 테스트</h1>
    //   <p>콘솔을 열어 결과를 확인하세요 (F12 또는 Ctrl + Shift + I)</p>
    
       <main>
       <Box name="김성윤" num="1"/>
       <Box name="김세진" num="2"/>
       <Box name="김주영" num="3"/>
       <Box name="장석환" num="4"/>
       </main>
       
    // </div>
  );
}

export default App;
