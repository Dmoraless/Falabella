import { Component } from '@angular/core'

@Component({

    selector: 'pie',
    template: 
    `
    <footer>
        <table id="foot">
            <tr>
                <th>Our Company</th>
                <th>Customer Service</th>
                <th>Holding Falabella</th>
            </tr>
            <tr>
                <td>Partnership</td> 
                <td>Why Falabella?</td>
                <td>CMR</td>   
            </tr>
            <tr>
                <td>Investers</td>
                <td>Our Principles</td>
                <td>Banking Services</td>
            </tr>
            <tr>
                <td>Work with us</td>
                <td>Website map</td>
                <td>Travel Assitance</td>
            </tr>
        </table>
    </footer>
    `
})

export class FooterComponent{}