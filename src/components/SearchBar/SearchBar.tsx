import React, {Component} from 'react';
import './SearchBar.scss';

interface SearchBarIntface {
    searchTermChanged: any
}

class SearchBar extends Component<SearchBarIntface>{
    state = {
        value: ''
    };

    setTimeOutId: number = -1;

    handleSearchTermChange = (e: { target: { value: any; }; }) => {
        this.setState({value: e.target.value});
        clearTimeout(this.setTimeOutId);


        this.setTimeOutId = setTimeout(() => {
            // @ts-ignore
            this.props.searchTermChanged(this.state.value);
        }, 500) as unknown as number;

    }

    render() {
        return (
            <div className={'search-bar'}>
                <div className={'search-bar__content'}>
                    <i className="search-bar__icon fas fa-search"></i>
                    <input
                        placeholder={'Search Movies'}
                        className="search-bar__input"
                        value={this.state.value}
                        onChange={this.handleSearchTermChange}
                        type="text"/>
                </div>
            </div>
        );
    }
}

export default SearchBar;