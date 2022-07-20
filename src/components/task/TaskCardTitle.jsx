import React, { useState } from "react";

export const TaskCardTitle = () => {
  // isClickはクリックしたかどうかの変数
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle ] = useState("Today");
  const handleClick = () => {
    setIsClick(true)
  }

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false)
  }

  const handleblur = () => {
    setIsClick(false);
  }

  return(
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? 
        (<form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInput"
          // inputを押したら勝手にフォーカスされてすぐに変更できる様にした。分からなかったらコメントアウトして確かめる様にする 
            autoFocus
            type=" " 
            onChange={handleChange} 
            // input以外が押されたときに呼び出されるプロパティ 
            onBlur={handleblur} 
            // inputを押したときに、Todayの文字が残る様にする
            value={inputCardTitle} 
            // inputに10文字しか入らない様にする
            maxLength={10}
            />
          </form>
          ) : (
          <h3>{inputCardTitle}</h3>
          )}
    </div>
    )
};