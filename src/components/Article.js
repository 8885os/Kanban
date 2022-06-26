import { CgRemove } from 'react-icons/cg'

const Article = ({ task, specify, onDelete }) => {



    return (
        <article className='task'>
            <div className="article" id={specify}>
                <p id='tasktext'>
                    {task.text} <CgRemove className='remove' style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
                </p>
            </div>

        </article>
    )
}

export default Article