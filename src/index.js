import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => (
	<button onClick={handleClick}>
		{text}
	</button>
)

const Statistic = ({teksti, numero}) => {
	return (
		<tbody>
		<tr>
			<td>{teksti}</td>
			<td>{numero}</td>
		</tr>
		</tbody>
	)
}

const Statistics = ({state}) => {
	if (state.maara === 0) {
		return (
			<div>
				<h2>statistiikka</h2>
				<p>
					ei yhtään palautetta
				</p>
			</div>
		)
	}
	return (
		<div>
			<h2>statistiikka</h2>
			<table>
				<Statistic teksti="hyvä" numero={state.hyva}/>
				<Statistic teksti="neutraali" numero={state.neutraali}/>
				<Statistic teksti="huono" numero={state.huono}/>
				<Statistic teksti="keskiarvo" numero={state.asteluku / state.maara}/>
				<Statistic teksti="positiivisia" numero={state.hyva / state.maara * 100 + ' %'}/>
			</table>
		</div>
	)
}



class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hyva: 0,
			neutraali: 0,
			huono: 0,
			maara: 0,
			asteluku: 0,
		}
	}
	asetaArvo = (arvio, arvo) => {
		
		if (arvio === 'neutraali') {
			return () => {
				this.setState({neutraali: arvo})
				this.setState({maara: this.state.maara + 1})
			}
		}
		if (arvio === 'huono') {
			return () => {
				this.setState({huono: arvo})
				this.setState({maara: this.state.maara + 1})
				this.setState({asteluku: this.state.asteluku - 1})
			}
		}
		return () => {
			this.setState({hyva: arvo})
			this.setState({maara: this.state.maara + 1})
			this.setState({asteluku: this.state.asteluku + 1})
		}
	}
	render() {
		
		return(
			<div>
				<h2>Anna palautetta</h2>
				<div>
					<Button handleClick={this.asetaArvo('hyva', this.state.hyva + 1)}
					        text="hyvä"/>
					<Button handleClick={this.asetaArvo('neutraali', this.state.neutraali + 1)}
					        text="neutraali"/>
					<Button handleClick={this.asetaArvo('huono', this.state.huono + 1)}
					        text="huono"/>
				</div>
				<Statistics state={this.state}/>
			</div>
		)
	}
}


ReactDOM.render(<App/>, document.getElementById('root'));
