const Header = (props) => {
    return <h1>{props.course}</h1>
}
  
const Content = (props) => {
    return (
        <div>
        {props.part.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
        <p>{props.name} {props.exercises}</p>
        </div>
    )
}

const Total = (props) => {

return (
    <div>
    <p><strong>Number of exercises {props.parts.reduce((a,b) => a+b.exercises, 0)}</strong></p>
    </div>
)
}

const Course = ({ course }) => {
    return (
        <div>
        {course.map(course_part => 
            <div key={course_part.id}>
                <Header key={2 * course_part.id} course={course_part.name}/>
                <Content key={2 * course_part.id + 1} part={course_part.parts}/>
                <Total key={-1 *course_part.id} parts={course_part.parts}/>
            </div>
            )
        }
        </div>
    )
}

export default Course