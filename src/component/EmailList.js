import React from 'react'
import Chip from 'material-ui/Chip';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ChipInput from 'material-ui-chip-input';

const outsideDataSource = [
    {
        key: 1,
        email: "marina.augustine@gmail.com",
        name: "Marina Augustine"
    },
    {
        key: 2,
        email: "nick.giannopoulos@gmail.com",
        name: "Nick Giannopoulos"
    },
    {
        key: 3,
        email: "anita.gros@gmail.com",
        name: "Anita Gros"
    },
    {
        key: 4,
        email: "megan.smith@gmail.com",
        name: "Megan Smith"
    },
    {
        key: 5,
        email: "narayana.garner@gmail.com",
        name: "Narayana Garner"
    }
]
export default class EmailList extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            guestList: outsideDataSource
        }
    }
    handleRequestDelete = (key) => {
        this.guestList = this.state.guestList;
        const chipToDelete = this.guestList.map((chip) => chip.key).indexOf(key);
        this.guestList.splice(chipToDelete, 1);
        this.setState({guestList: this.guestList});
    }
    renderGuestList(guest) {
        return (
            <MuiThemeProvider>
                <Chip                    
                    key={guest.key}
                    onRequestDelete={() => this.handleRequestDelete(guest.key)}
                    style={{display: 'inline-block', marginLeft: '10px', marginBottom: '10px'}}
                    labelStyle={{verticalAlign: 'top'}}
                >
                    {guest.name}
                </Chip>
               
            </MuiThemeProvider>
        )
    }
    render() {
        const {guestList} = this.state
        return (
            <div>
                {guestList.map(this.renderGuestList, this)}
            </div>
        );
    }
}