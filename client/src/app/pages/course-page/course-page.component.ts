// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * coursePage Component
 */
@Component({
    selector: 'app-course-page',
    templateUrl : './course-page.component.html',
    styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent {

    constructor(
        private location: Location
        ) {

    }
}
