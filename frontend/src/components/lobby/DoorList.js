import Door from "./Door";
import styles from "./DoorList.module.css";
import CreateRoom from "./CreateRoom";
import axios from "axios";
import { useEffect, useState } from "react";

function DoorList() {
  // Door.js에서 map쓸거면 선택한 태그(tags)를 배열로 받아와야함
  // OR 객체로 받아와서 배열로 변환
  //여기로 값을 가져오면, 각 Door로 값이 자동으로 갈까?
  
  //백에서 값 받아오기
  const [roomdata, setRoomdata] = useState([]);
  
  const Roomdata = async () => {
    // useEffect(() => { 
      axios
        .get('http://i6a306.p.ssafy.io:8080/api/v1/lobby')
        .then((response) => {
          console.log(response.data);
          setRoomdata(response.data);
          console.log("룸데이타:", roomdata);
          console.log("룸데이타1:", roomdata[0]);
        })
        .catch( e => {
          console.error(e);
        });
    };
    // , []);
  // }

//태그 값
  const tags = []; //arrcheckedTags


  return (
    <>
    <button onClick={Roomdata}>button</button>
      <CreateRoom />
      <div className={styles.gridcontainer}>
        <Door tags={tags} roomdata={roomdata[0]}/>
        <Door />
      </div>
      <div className={styles.gridcontainer}>
        <Door />
        <div className={styles.griditem}>
          <Door />
          <Door />
        </div>
        <Door />
      </div>
      <div className={styles.gridcontainer}>
        <Door />
        <div className={styles.griditem}>
          <Door />
          <Door />
        </div>
        <Door />
      </div>
      <div className={styles.gridcontainer}>
        <Door />
        <div className={styles.griditem}>
          <Door />
          <Door />
        </div>
        <Door />
      </div>
      <div className={styles.gridcontainer}>
        <Door />
        <div className={styles.griditem}>
          <Door />
          <Door />
        </div>
        <Door />
      </div>
    </>
  );
}

export default DoorList;
