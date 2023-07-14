
import BarChartBox from '../../componets/barChartBox/BarChartBox'
import BigChartBox from '../../componets/bigChartBox/BigChartBox'
import ChartBox from '../../componets/chartBox/ChartBox'
import PieChartBox from '../../componets/pieChartBox/PieChartBox'
import TopBox from '../../componets/topBox/TopBox'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import './Home.scss'
export default function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div> 
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div> 
      <div className="box box4"><PieChartBox /></div> 
      <div className="box box5"><ChartBox {...chartBoxConversion}/></div> 
      <div className="box box6"><ChartBox {...chartBoxRevenue}/></div> 
      <div className="box box7"><BigChartBox /></div> 
      <div className="box box8"><BarChartBox {...barChartBoxRevenue}/></div> 
      <div className="box box9"><BarChartBox {...barChartBoxVisit}/></div>
    </div>
  )
}
