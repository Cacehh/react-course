
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'This is our very cool subtitle'
        const options = ['one', 'two', 'three']
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component{
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    handlePick() {
        alert('hi')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>I am a button</button>
            </div>
        )
    }
}

class Options extends React.Component {
    handleRemoveAll(){
        alert('all options removed')
    }
    render() {
        return (
            <div>
                <p>{this.props.options.length}</p>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const optionValue = e.target.elements.optionValue.value.trim();
        
        if (optionValue) {
            alert(optionValue);
        }
    }
    render() {
        return (
            <div>
                {this.props.optionText}

                <div>
                    <form onSubmit={this.handleAddOption}>
                        <input type="text" name="optionValue"></input>
                        <button >Add New Option</button>
                    </form>
                </div>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'))