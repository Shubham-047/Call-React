
import React, { useEffect, useState } from "react";
import LongMenu from "./OptionsLeft";
import OptionsRight from "./OptionsRight";
import styles from "./select.module.css"



export default function Select(props) {
  return (
    <>
      {props.selectList?.map((e) => {
        return (
          <tr key={e.id}>
            <td>
              <LongMenu
                onClick={() => props.handleChangeVal(e.id)}
                handleLeftChange={props.handleLeftChange}
                menu={props.left}
                current={e.leftSelect}
                id={e.id}
              />
            </td>
            <td>
              <OptionsRight
              handleRightChange={props.handleRightChange}
              optionRight={props.right}
              id={e.id}
              currentRight={e.rightSelect}
              />
            </td>
            <td>
              <button  className={styles.btn} value={e.id} onClick={props.handleDelete}>
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}
