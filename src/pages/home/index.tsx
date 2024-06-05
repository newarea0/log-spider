import { Card } from 'antd'
import Header from './components/Header'
import PlotCharts from './components/PlotCharts'
import ProjectCard from './components/ProjectCard'
import QuickNav from './components/QuickNav'
import SvgIllustration from '@/assets/svg/illustration.svg'

function Home() {
  return (
    <>
      <Header />
      <div className="flex mt-4">
        <div className="w-4/6 mr-4">
          <ProjectCard />
          <div className="mt-4">
            <PlotCharts />
          </div>
        </div>
        <div className="w-2/6">
          <QuickNav />
          <Card className="mt-4">
            <img className="mx-auto h-50" src={SvgIllustration} />
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home
