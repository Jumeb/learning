export class Location {
    constructor(
        public country: string,
        public location: string,
        public time: string,
        public temp: number,
        public percent: number,
        public wind: number,
        public direction: string
        ) {}
    
}