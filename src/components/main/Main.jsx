import Charts from '../charts/Charts'
import './Main.css'
const hello = "https://www.pngmart.com/files/21/Hello-Silhoutte-PNG-Photo.png"

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="jello" />
                    <div className='main__greeting'>
                        <h1>Olá Fernando</h1>
                        <p>Bem vindo ao seu painel</p>
                    </div>
                </div>
            </div>

            <div className="main__cards">
                <div className='card'>
                    <div className="card__title">
                        <i className='fa fa-file-text fa-2x text-lightblue'></i>
                        <p className='text-primary-p'>Número de Pedidos</p>
                    </div>
                    <div className='card_inner'>
                        <span className='font-bold text-title'>578</span>
                    </div>
                </div>

                <div className='card'>
                    <div className="card__title">
                        <i className='fa fa-money fa-2x text-red'></i>
                        <p className='text-primary-p'>Pagamentos</p>
                    </div>
                    <div className='card_inner'>
                        <span className='font-bold text-title'>R$ 2.568,00</span>
                    </div>
                </div>

                <div className='card'>
                    <div className="card__title">
                        <i className='fa fa-archive fa-2x text-yellow'></i>
                        <p className='text-primary-p'>Número de produtos</p>
                    </div>
                    <div className='card_inner'>
                        <span className='font-bold text-title'>754</span>
                    </div>
                </div>

                <div className='card'>
                    <div className="card__title">
                        <i className='fa fa-bars fa-2x text-green'></i>
                        <p className='text-primary-p'>Categorias</p>
                    </div>
                    <div className='card_inner'>
                        <span className='font-bold text-title'>40</span>
                    </div>
                </div>
            </div>

            <div className='charts'>
                <div className='charts__left'>
                    <div className='charts__left__title'>
                        <div>
                            <h1>Daily Reports</h1>
                            <p>Goiânia, Goiás, Brasil</p>
                        </div>
                        <i className='fa fa-area-chart'></i>
                    </div>
                    <Charts />
                </div>

                <div className='charts__right'>
                    <div className='charts__right__title'>
                        <div>
                            <h1>Daily Reports</h1>
                            <p>Goiânia, Goiás, Brasil</p>
                        </div>
                        <i className='fa fa-area-chart'></i>
                    </div>

                    <div className='charts__right__cards'>
                        <div className='card1'>
                            <h1>Lucro</h1>
                            <p>R$ 2.569,00</p>
                        </div>

                        <div className='card2'>
                            <h1>Pagamentos</h1>
                            <p>R$ 250,00</p>
                        </div>

                        <div className='card3'>
                            <h1>Custo de Hospedagem</h1>
                            <p>R$ 150,00</p>
                        </div>

                        <div className='card4'>
                            <h1>Banco de Dados</h1>
                            <p>R$ 180,00</p>
                        </div>
                    </div>
                
                </div>
            </div>
        </main>
    )
}

export default Main;