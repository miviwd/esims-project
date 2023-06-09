import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './Estrutura.css'
import chip from '../../assets/images/chip-esims.png'
import card from '../../assets/icons/credit-card.svg'
import  casa from '../../assets/icons/house.svg'

import  seta from '../../assets/icons/chevron-right.svg'



function Estrutura() {
  
  return (
    <div>
    <Header/>
    
    <div className="DivAzul">
      <div className='page-title'>
      <div className="container">
        <div className='title'>
          <span className='carrinho'>Carrinho</span>
        </div>
          <div className='elements'  >
          <a href>
          <img className='house' src={casa} alt='iamgem casa'/> 
          </a>
          </div>
          <p className='redirecionar'>
              Início
            </p>
          </div>
    </div>
    <div>
    <img  className='arrumar' src={seta} alt='imagem seta'></img>
    </div>
            <div>
            <li class="breadcrumb">Carrinho</li>
            </div>
     
   
  
    
      </div> 
      
      
      <div className="container">
     
          <section className='alinhar'>
          <div className='row'>
      <div className='DivBranca'> 
     
     <p>Total do carrinho</p>
 <div className='linha'>
   
      <span>Sub-total:</span>
      <span>R$ 262,80</span>
     
  </div>
   <span className='valor'>R$ 262,80</span>
     <a href="">
       <img className='btn' src={card} alt="imagem carat" />
       <button className='StyleButton'>Concluir Compra</button>
     </a>
  </div>

  <div >
      <div > 
      <p className='quant' >Quantidade</p>
     
          <input type='number'></input>
        </div>
      
       <div>
        <img className="chip" src={chip} alt="imagem chip" />
        </div>
        <div><a className="name" href=''>Regional – América Latina – 24 DIAS 5GB</a></div>
        <div><span className="decoracao">R$ 262,80</span></div>
       
        </div>
        </div>
          </section>
       
    </div>
    <Footer/>
   </div>
   
  );
};

export default Estrutura;
