import { useMutation } from 'react-query';
import axios from 'axios';

interface TodoType{
    id: number;
    todo: string;
}

const addTodo = async (newTodo: TodoType): Promise<TodoType> => {
    const {data} = await axios.post<TodoType>('todos', newTodo);
    return data;
}
const {mutate, isLoading, isError, error, isSuccess}= useMutation(addTodo);

export function useAddTodo(){

    return (
        <div>
            {isLoading?(
                'Adding  todo'
            ):(
                <>
                {isError && <p>error: {"error.message"}</p>}
                {isSuccess && <p>Todo add success</p>}
                
                <button onClick={()=>{
                    mutate({id:1, todo:'ustation 예제'})
                }}>
                    작성완료
                </button>
                </>
            )}
        </div>
    )
}
