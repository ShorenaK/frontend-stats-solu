export default function StatsList(props) {
    return <div className="grid-three-col stats-wrapper">
        {props.stats?.map(stat => {
            return <div className="stat-wrapper">
                <p className="stat-heading">{stat.title}</p>
                <p className="stat-label caps">{stat.label}</p>
            </div>
        })}
    </div>
}