import React, { Fragment, useState } from 'react';


interface iTask {
name: string;
done: boolean;

}

function App(): JSX.Element {

    const [newTask,  setNewTask] = useState <string> ('');
    const [task, setTask] = useState <iTask[]> ([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();  
      addTask(newTask)
      setNewTask('');
      
    }

    const addTask = (name: string) => {

     const newTask: iTask[] = [...task, {name, done:false}]
     setTask(newTask);

    }

    const toggleDoneTask = (i: number) => {
      const newTask: iTask[] = [...task];
      newTask[i].done = !newTask[i].done;
      setTask(newTask);
    }

    const removeTask = (i: number) => {

      const newTask: iTask [] = [...task];
      newTask.splice(i,1);
      setTask(newTask);

    }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <div className="card">
                  <form onSubmit={handleSubmit}>
                    <input 
                    className="form-control"
                    type="text" 
                    onChange={e => setNewTask(e.target.value)}
                    value={newTask}
                    autoFocus
                  />
                  <button className="btn btn-success btn-block mt-2">Save</button>
                </form>
              </div>
            </div>
          {
            task.map((t: iTask, i: number)=> (
              <div className="card card-body mt-2" key={i}>
                <h2 style={{textDecoration: t.done ? 'line-through' : ''}}> {t.name} </h2>               

                <div>
                  <button className="btn btn-secondary" onClick={() => toggleDoneTask (i)}>
                    {t.done ? '✓' : '✖'}
                  </button>

                  <button className="btn btn-danger" onClick={() => removeTask(i)}>
                    🗑
                  </button>
                </div>
              
              
              </div>

              
              
            )
              
            )
          }
              </div>
            </div>

                  </div>

                </div>
      



      


    
  );
}

export default App;
