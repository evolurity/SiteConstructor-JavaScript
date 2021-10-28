import image from './assets/image.jpg';
import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from "./classes/blocks";

export const model = [
    new TitleBlock('Site constructor on pure JavaScript', {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                'text-align': 'center',
                padding: '1.5rem'
            }
        }
    ),
    new TextBlock('Блок текста .....', {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        }
    ),
    new ColumnsBlock(
        [
            'Приложение работает на чистом JavaScript',
            'Реализованы принципы SOLID и ООП в JavaScript',
            'JavaScript - это просто и интересно.'
        ],
        {
            styles: {
                background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }
    ),
    new ImageBlock(image,
        {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
                width: '500px',
                height: 'auto'
            },
            alt: 'this is image'
        }
    )
]