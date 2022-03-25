import React, { Component } from 'react';

export class TestApi extends Component {
    static displayName = TestApi.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(forecasts) {
        console.log(JSON.stringify(forecasts));
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{forecasts.waited}</td>
                        <td>{forecasts.producted}</td>
                        <td>{forecasts.production}</td>
                    </tr>
                    
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : TestApi.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('https://localhost:44342/api/StationStatus?shiftId=1&lineId=1', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        console.log(JSON.stringify(data));
        this.setState({ forecasts: data, loading: false });
    }
}
