import React from "react";
import { v4 as uuid } from 'uuid';

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    // カードを追加する。handleSubmitが呼ばれた = Enterを押したとき。
    setTaskList([
      // 以前のtaskListの内容
      ...taskList,
      {
        // ...taskListに足したいものがここに入る
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    // e.target.valueがフォームで入力した文字
    setInputText(e.target.value);
  };

  return (
    <div>
      {/* onSubmitはEnterを押したときに行いたい関数を呼べる */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          //  フォームに文字が入るたびに呼び出されるプロパティ
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
