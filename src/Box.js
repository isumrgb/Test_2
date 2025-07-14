import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



function Box(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickMe = () => {
    alert("리엑트 강의를 마쳤습니다!!");
  };

  // ✅ 회원가입
  const handleSignUp = async () => {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("✅ 회원가입 성공:", userCredential.user);
    } catch (error) {
      console.error("❌ 회원가입 실패:", error.message);
    }
  };

  // ✅ 로그인
  const handleSignIn = async () => {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ 로그인 성공:", userCredential.user);
    } catch (error) {
      console.error("❌ 로그인 실패:", error.message);
    }
  }

  return (
    <div className="box">
      Box{props.num}
      {props.name}
      <h4>회원가입</h4>
      <div>
        email : <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        password : <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" onClick={handleSignUp}>회원가입</button>
      <button type="submit" onClick={handleSignIn}>로그인</button>
      <br />
      <button onClick={clickMe}>클릭!</button>
    </div>
  )
}

export default Box