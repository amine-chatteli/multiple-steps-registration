import React from 'react'
import { connect } from 'react-redux';
import { setUser } from '../../redux/current-user/actions'
import './styles.css'
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../..//node_modules/react-resizable/css/styles.css'
import { Responsive, WidthProvider } from 'react-grid-layout';
import SideBar from '../../components/side-bar';
import Box from '../../components/box';
import Header from '../../components/header';
import Graph from '../../components/graph';
import Card from '../../components/card';
import { data } from './data'
const ResponsiveGridLayout = WidthProvider(Responsive);

class Dashboard extends React.Component {
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'))
        this.props.setUser(user)
    }
    render() {
        const { currentUser } = this.props
        const { boxesData, sideBarData,cards } = data

        return (
            <>
                <SideBar sideBarData={sideBarData} />
                <Header />
                <ResponsiveGridLayout className="layout"
                    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 300, xxs: 0 }}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}>

                    {
                        boxesData.map(box => ((<div key={box.key} data-grid={box.grid} >
                            <Box text={box.text} number={box.number} num={box.key} />
                        </div>)))
                    }

                    <div key="5" className="graph-box" data-grid={{ x: 4, y: 6, w: 5, h: 3, }}>
                        <Graph />
                    </div>
                    <div key="6" data-grid={{ x: 3, y: 7, w: 3.5, h: 2, }}>
                        <Card card={cards[0]} />
                    </div>
                    <div key="7" data-grid={{ x: 7, y: 7, w: 3.5, h: 2, }}>
                        <Card />
                    </div>

                </ResponsiveGridLayout>


            </>
        )
    }
}
const mapStateToProps = ({ currentUser: { currentUser } }) => ({
    currentUser: currentUser
})
const mapDispatchToProps = dispatch => ({
    setUser: (user) => (dispatch(setUser(user)))
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
