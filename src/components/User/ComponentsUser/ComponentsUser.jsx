import React from 'react'
import styles from "./ComponentsUser.module.css"
import { BrowserRouter, NavLink } from "react-router-dom";

export default function ComponentsUser() {
  return (
    <div className={styles.ComponentsUser_div}>
        <div className={styles.right}>
<img className={styles.User} src="User.png" alt="User" />
        </div>
        <div className={styles.leftq}>
         <p className={styles.name}>AltanGold</p>
<p className={styles.ststys}>Если тебе не нравится твоя судьба, не принимай ее</p>
<div className={styles.infos}>
  <p className={styles.info}>4
Публикаций</p>
<p className={styles.info}>15,3 тыс
Подписчики</p>
<p className={styles.info}>5
Подписки</p>  
<button className={styles.createPost}>+    создать пост</button>
</div> 
        </div>


    </div>   

  )
}