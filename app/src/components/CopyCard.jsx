import StatsList from "./StatsList"
const stats = [
    {title: "10k+", label: "companies"},
    {title: "314", label: "templates"},
    {title: "12M+", label: "queries"},
]
export default function ContentCard(props){
    return (
        <div className="grid-content-copy blue-bg">
            <h1 className="main-heading">Get <span className="accent-color">insights</span> that help your business grow. </h1>
            <p className="main-paragraph">Discover the benefits of data
     analytics and make better decisions regarding revenue, customer experience,
        and overall efficiency. </p>
        <StatsList stats={stats}/>
        </div>
    )
}