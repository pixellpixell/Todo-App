import './styles/main.css';
export default function DateComponent(){
    const current = new Date();
    const date = `${current.getDate()}.${current.getMonth()+1}.${current.getFullYear()}`;
    return(
        <div>
        <p>{date}</p>
            </div>
    )
}