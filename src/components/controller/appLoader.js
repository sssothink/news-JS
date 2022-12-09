import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'fbb371facb9f4ac499f8840136a1af78',
        });
    }
}
export default AppLoader;
