import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import '@/assets/reset.css'
import '@/assets/border.css'
import '@/assets/iconfont.css'
import 'vant/lib/index.css';
import './api/mock.js'
import { Swipe, SwipeItem, Image as VanImage, IndexBar, IndexAnchor, Grid, GridItem, Icon, ImagePreview} from 'vant';

const app = createApp(App)
app.use(router)
app.use(Swipe)
app.use(SwipeItem)
app.use(VanImage);
app.use(IndexBar)
app.use(IndexAnchor);
app.use(Grid)
app.use(GridItem)
app.use(Icon)
app.use(ImagePreview)


app.mount('#app')