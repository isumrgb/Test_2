import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



function Box(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      setIsLoggedIn(true); // ✅ 로그인 성공 시 상태 변경
    } catch (error) {
      console.error("❌ 로그인 실패:", error.message);
    }
  }

  // ✅ 로그인 후 화면
  if (isLoggedIn) {
    return (
      <div className="box">
        <h3>🎉 환영합니다, {email}님!</h3>
        <p>이제 학습을 시작해보세요.</p>
        <button onClick={clickMe}>클릭!</button>
      </div>
    );
  }

  return (
    <div className="box">
      <div style={{ textAlign: "center" }}>{props.name}</div>
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