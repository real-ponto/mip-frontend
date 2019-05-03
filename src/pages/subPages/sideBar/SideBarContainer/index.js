import React, { Component } from 'react'
import './index.css'

import { connect } from 'react-redux'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { changeActive } from '../sideBarRedux/action'
import { Redirect } from 'react-router-dom'


class SideBarContainer extends Component {
  render() {
    const { username, active } = this.props

    console.log(active)
    return (
      <div>
        <Sidebar
          className='SideMenu'
          as={Menu}
          icon='labeled'
          inverted
          visible
          vertical >

          <Menu.Item
            as='a'
            onClick={() => this.props.changeActive('User')}
            active={active === 'User'}>

            <div className='DivItem'>
              <Icon name='user outline' />
              {username}
            </div>
          </Menu.Item>

          <Menu.Item
            as='a'
            onClick={() => {
              this.props.changeActive('Dash')
              redirect('/logged/dash')
            }}
            active={active === 'Dash'} >

            <div className='DivItem'>
              <Icon name='line graph' />
              Monitoramento
            </div>
          </Menu.Item>

          <Menu.Item
            as='a'
            onClick={() => this.props.changeActive('Visit')}
            active={active === 'Visit'} >

            <div className='DivItem'>
              <Icon name='car' />
              Visitas
            </div>
          </Menu.Item>

          <Menu.Item
            as='a'
            active={active === 'Client'}
            onClick={() => {
              this.props.changeActive('Client')
              redirect('/logged/client')
            }} >

            <div className='DivItem'>
              <Icon name='address card outline' />
              Clientes
            </div>
          </Menu.Item>

          <Menu.Item
            as='a'
            onClick={() => this.props.changeActive('Contract')}
            active={active === 'Contract'} >

            <div className='DivItem'>
              <Icon name='handshake outline' />
              Contratos
            </div>
          </Menu.Item>

          <Menu.Item
            as='a'
            onClick={() => this.props.changeActive('PingMonitor')}
            active={active === 'PingMonitor'} >

            <div className='DivItem'>
              <Icon name='tv' />
              Ping Monitor
            </div>
          </Menu.Item>

          <Menu.Item
          as='a'
          onClick={() => this.props.changeActive('Módulos')}
          active={active === 'Módulos'} >

            <div className='DivItem'>
              <Icon name='money' />
              Módulos
        </div>
          </Menu.Item>

          <Menu.Item 
          as='a'
          onClick={() => this.props.changeActive('Produtos')}
          active={active === 'Produtos'} >

            <div className='DivItem'>
              <Icon name='suitcase' />
              Produtos
        </div>
          </Menu.Item>

          <Menu.Item 
            as='a'
            onClick={() => this.props.changeActive('Empréstimos')}
            active={active === 'Empréstimos'} >

            <div className='DivItem'>
              <Icon name='external alternate' />
              Empréstimos
        </div>
          </Menu.Item>

          <Menu.Item
            as='a'
            onClick={() => this.props.changeActive('Estoque')}
            active={active === 'Estoque'} >

            <div className='DivItem'>
              <Icon name='boxes' />
              Estoque
        </div>
          </Menu.Item>

          <Menu.Item 
          as='a'
          onClick={() => this.props.changeActive('Laboratório')}
          active={active === 'Laboratório'} >

            <div className='DivItem'>
              <Icon name='money' />
              Laboratório
        </div>
          </Menu.Item>

          <Menu.Item 
          as='a'
          onClick={() => this.props.changeActive('Funcionarios')}
          active={active === 'Funcionarios'} >

            <div className='DivItem'>
              <Icon name='users' />
              Funcionarios
        </div>
          </Menu.Item>

          <Menu.Item 
           as='a'
           onClick={() => this.props.changeActive('Historico')}
           active={active === 'Historico'} >

            <div className='DivItem'>
              <Icon name='money' />
              Historico
        </div>
          </Menu.Item>

        </Sidebar>
      </div>
    )
  }
}

function redirect (url) {
  return(
    <Redirect to={url}/>
  )
}

function mapDispacthToProps(dispach) {
  return bindActionCreators({ changeActive }, dispach)
}

function mapStateToProps(state) {
  return {
    active: state.sideBar.active,
    username: state.auth.username,
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(SideBarContainer)