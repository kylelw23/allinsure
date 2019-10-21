import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoImg from '../logo/Untitled-2.png';
export default function LandingPage() {
    return (
        <>
        <div className="header"><img src={LogoImg} alt=""/></div>
	    <div id="clear"></div>
	    <div id="content">
		<h1 className="">Safety doesn't happen by accident.</h1>
		<div className="idk">
			<span>
				Start protect your live with
				our insurance</span>
			</div>
			<div className="container-login-form-btn">
				<div className="wrap-login-form-btn">
					<div className="login-form-bgbtn"></div>
					<Link to='/User-Login'className="login-form-btn">Make a quote</Link>
				</div>
			</div>
			<div className="container-login-form-btn m-t-30">
				<div className="wrap-login-form-btn">
					<div className="login-form-bgbtn"></div>
					<Link to='/User-Login'className="login-form-btn">Claim your insurance</Link>
				</div>
			</div>
			<div className="admin-login">
				<Link to="/admin-login" className="txt3">
					For administration
				</Link>
			</div>
	</div>
	<svg 
		version="1.1" id="Layer_1"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink" 
		x="0px" 
		y="0px"
		viewBox="0 0 300 345" 
		style={{enableBackground: "new 0 0 300 345"}}
		xmlSpace="preserve" >
		
		<g id="browser">
			<g className="st0">
				<defs>
					<path id="SVGID_1_" className="st0" d="M33.01,28.91c-2.82,1.64-5.64,3.27-8.46,4.92c-1.44-0.83-2.63-2.88-2.62-4.55l8.46-4.91
						C30.38,26.02,31.56,28.07,33.01,28.91z"/>
				</defs>
				<clipPath id="SVGID_2_">
					<use xlinkHref="#SVGID_1_"  style={{overflow:"visible"}}/>
				</clipPath>
				<g className="st1">
					<path className="st2" d="M21.93,29.27l8.46-4.91c0,0.22,0.02,0.45,0.06,0.68l-8.46,4.91C21.95,29.72,21.93,29.49,21.93,29.27"/>
					<path className="st3" d="M21.99,29.95l8.46-4.91c0.12,0.71,0.42,1.45,0.83,2.11l-8.46,4.91C22.41,31.4,22.11,30.66,21.99,29.95"/>
					<path className="st2" d="M22.82,32.06l8.46-4.91c0.16,0.25,0.33,0.49,0.52,0.71l-8.46,4.91C23.15,32.55,22.98,32.31,22.82,32.06"/>
					<path className="st4" d="M23.34,32.78l8.46-4.91c0.14,0.17,0.3,0.33,0.45,0.48l-8.46,4.91C23.63,33.11,23.48,32.95,23.34,32.78"/>
					<path className="st5" d="M23.79,33.25l8.46-4.91c0.15,0.14,0.3,0.27,0.46,0.38l-8.46,4.91C24.1,33.52,23.94,33.39,23.79,33.25"/>
					<path className="st6" d="M24.26,33.63l8.46-4.91c0.1,0.07,0.2,0.13,0.3,0.19l-8.46,4.91C24.45,33.76,24.35,33.7,24.26,33.63"/>
				</g>
			</g>
			<g>
				<path className="st7" d="M39.19,27.64c1.45,0.84,2.63,2.88,2.62,4.55l-0.02,8.55c0,1.67-1.19,2.35-2.64,1.51l-14.6-8.43
					c-1.44-0.83-2.63-2.88-2.62-4.55l0.02-8.55c0-1.67,1.2-2.34,2.64-1.51L39.19,27.64z"/>
			</g>
			<path className="st8" d="M224.23,288.98c0.15-0.03,0.29-0.08,0.44-0.13c0.07-0.02,0.14-0.04,0.21-0.07c0.21-0.08,0.41-0.17,0.6-0.28
				l8.46-4.91c-0.19,0.11-0.39,0.2-0.6,0.28c-0.07,0.03-0.14,0.04-0.21,0.07c-0.14,0.05-0.28,0.09-0.43,0.12
				c-0.09,0.02-0.18,0.03-0.27,0.04c-0.14,0.02-0.28,0.04-0.43,0.05c-0.1,0.01-0.2,0.01-0.29,0.01c-0.14,0-0.29,0-0.44-0.01
				c-0.1-0.01-0.21-0.02-0.31-0.03c-0.15-0.02-0.31-0.04-0.46-0.07c-0.11-0.02-0.21-0.04-0.32-0.06c-0.16-0.04-0.33-0.09-0.5-0.14
				c-0.1-0.03-0.21-0.06-0.31-0.1c-0.19-0.07-0.39-0.15-0.58-0.23c-0.08-0.04-0.17-0.07-0.25-0.11c-0.29-0.13-0.58-0.28-0.87-0.45
				l-45.71-26.39c-0.32-0.19-0.64-0.39-0.96-0.61c-0.2-0.14-0.39-0.29-0.59-0.44c-0.08-0.06-0.16-0.12-0.24-0.18
				c-0.27-0.22-0.54-0.46-0.81-0.7c-0.08-0.08-0.16-0.16-0.24-0.24c-0.19-0.18-0.37-0.36-0.55-0.55c-0.1-0.11-0.2-0.22-0.3-0.33
				c-0.15-0.17-0.31-0.34-0.45-0.51c-0.29-0.34-0.56-0.69-0.83-1.05c-0.07-0.1-0.14-0.21-0.22-0.31c-0.19-0.27-0.37-0.54-0.55-0.82
				c-0.07-0.11-0.14-0.23-0.21-0.35c-0.29-0.48-0.57-0.97-0.83-1.46c-0.02-0.03-0.03-0.07-0.05-0.11c-0.24-0.48-0.46-0.96-0.65-1.45
				c-0.04-0.1-0.09-0.2-0.13-0.31c-0.2-0.5-0.37-1.01-0.52-1.51c-0.03-0.1-0.05-0.2-0.08-0.29c-0.13-0.48-0.25-0.97-0.33-1.44
				c-0.01-0.05-0.02-0.11-0.03-0.16c-0.04-0.24-0.07-0.48-0.09-0.73c-0.01-0.12-0.03-0.24-0.04-0.36c-0.03-0.36-0.05-0.71-0.05-1.06
				l0.04-13.38l-53.96-31.15c-0.32-0.19-0.64-0.39-0.96-0.61c-0.2-0.14-0.39-0.29-0.58-0.44c-0.08-0.06-0.17-0.12-0.25-0.19
				c-0.27-0.22-0.54-0.46-0.81-0.7c-0.08-0.07-0.16-0.16-0.24-0.23c-0.19-0.18-0.38-0.36-0.56-0.56c-0.1-0.11-0.2-0.22-0.29-0.33
				c-0.15-0.17-0.31-0.34-0.46-0.52c-0.29-0.34-0.56-0.69-0.82-1.05c-0.07-0.1-0.14-0.21-0.22-0.31c-0.19-0.27-0.37-0.54-0.55-0.81
				c-0.07-0.11-0.14-0.23-0.21-0.34c-0.29-0.48-0.57-0.97-0.83-1.46c-0.02-0.03-0.03-0.07-0.05-0.1c-0.24-0.48-0.46-0.96-0.65-1.45
				c-0.04-0.1-0.08-0.2-0.12-0.3c-0.2-0.5-0.37-1.01-0.52-1.51c-0.03-0.1-0.05-0.2-0.08-0.29c-0.13-0.48-0.24-0.96-0.33-1.44
				c-0.01-0.05-0.02-0.11-0.03-0.16c-0.04-0.24-0.07-0.48-0.09-0.72c-0.01-0.12-0.03-0.24-0.04-0.36c-0.03-0.36-0.05-0.71-0.05-1.06
				l0.1-35.13l-22-12.7c-0.32-0.19-0.64-0.39-0.96-0.61c-0.2-0.14-0.39-0.29-0.58-0.44c-0.08-0.06-0.17-0.12-0.25-0.19
				c-0.27-0.22-0.54-0.46-0.81-0.7c-0.09-0.08-0.17-0.17-0.26-0.25c-0.18-0.18-0.36-0.35-0.54-0.54c-0.1-0.11-0.2-0.23-0.31-0.34
				c-0.15-0.17-0.3-0.33-0.45-0.5c-0.29-0.34-0.56-0.69-0.83-1.05c-0.07-0.1-0.14-0.21-0.22-0.31c-0.19-0.27-0.37-0.54-0.55-0.82
				c-0.07-0.11-0.14-0.23-0.21-0.34c-0.29-0.48-0.57-0.97-0.83-1.46c-0.02-0.04-0.03-0.07-0.05-0.11c-0.24-0.48-0.46-0.96-0.65-1.45
				c-0.04-0.1-0.08-0.2-0.12-0.3c-0.2-0.5-0.37-1.01-0.52-1.51c-0.03-0.1-0.05-0.2-0.08-0.3c-0.13-0.48-0.25-0.97-0.33-1.44
				c-0.01-0.05-0.02-0.11-0.03-0.16c-0.04-0.24-0.07-0.48-0.09-0.72c-0.01-0.12-0.03-0.24-0.04-0.36c-0.03-0.36-0.05-0.71-0.05-1.06
				l0.08-26.77c0-0.23,0.02-0.44,0.03-0.66c0.01-0.13,0.01-0.26,0.03-0.38c0.02-0.19,0.05-0.37,0.08-0.54
				c0.02-0.1,0.03-0.21,0.05-0.31c0.05-0.22,0.11-0.44,0.17-0.64c0.01-0.04,0.02-0.09,0.04-0.14c0.08-0.25,0.17-0.48,0.28-0.7
				c0.11-0.24,0.24-0.47,0.37-0.67c0.02-0.04,0.05-0.07,0.08-0.1c0.12-0.17,0.24-0.33,0.37-0.48c0.1-0.11,0.21-0.21,0.32-0.3
				c0.06-0.05,0.11-0.11,0.16-0.15c0.17-0.14,0.35-0.26,0.54-0.37l-8.46,4.91c-0.19,0.11-0.37,0.23-0.54,0.37
				c-0.06,0.05-0.11,0.1-0.16,0.15c-0.1,0.09-0.2,0.18-0.3,0.28c-0.01,0.01-0.01,0.02-0.02,0.03c-0.13,0.15-0.25,0.31-0.37,0.48
				c-0.02,0.04-0.05,0.07-0.08,0.1c-0.14,0.21-0.26,0.43-0.37,0.67c0,0.01-0.01,0.01-0.01,0.02c-0.1,0.22-0.19,0.44-0.27,0.68
				c-0.01,0.04-0.02,0.09-0.04,0.14c-0.06,0.19-0.12,0.39-0.16,0.6c0,0.01,0,0.03-0.01,0.04c-0.02,0.1-0.03,0.21-0.05,0.31
				c-0.03,0.18-0.06,0.36-0.08,0.55c-0.01,0.12-0.02,0.25-0.03,0.37c-0.01,0.14-0.03,0.28-0.03,0.43c0,0.08,0,0.15,0,0.23l-0.08,26.77
				c0,0.35,0.02,0.7,0.05,1.06c0.01,0.12,0.03,0.25,0.05,0.37c0.03,0.24,0.05,0.47,0.09,0.71c0,0.02,0,0.03,0.01,0.05
				c0.01,0.04,0.02,0.08,0.03,0.11c0.08,0.48,0.2,0.96,0.33,1.44c0.03,0.1,0.05,0.2,0.08,0.3c0.15,0.51,0.32,1.01,0.52,1.51
				c0.04,0.1,0.08,0.2,0.12,0.3c0.2,0.49,0.41,0.97,0.65,1.45c0.02,0.04,0.03,0.07,0.05,0.11c0.25,0.5,0.53,0.98,0.83,1.46
				c0.03,0.06,0.06,0.11,0.1,0.17c0.04,0.06,0.08,0.12,0.12,0.18c0.18,0.28,0.36,0.55,0.55,0.81c0.07,0.1,0.14,0.21,0.22,0.31
				c0.27,0.36,0.54,0.71,0.82,1.05c0.01,0.01,0.01,0.02,0.02,0.03c0.14,0.17,0.29,0.33,0.44,0.49c0.1,0.11,0.2,0.22,0.3,0.33
				c0.18,0.19,0.36,0.36,0.55,0.54c0.08,0.08,0.17,0.17,0.25,0.25c0,0,0.01,0.01,0.01,0.01c0.26,0.24,0.53,0.47,0.8,0.7
				c0.08,0.07,0.16,0.12,0.24,0.19c0.18,0.14,0.35,0.28,0.53,0.41c0.02,0.01,0.04,0.02,0.05,0.03c0.31,0.22,0.63,0.43,0.96,0.61
				l22,12.7l-0.1,35.13c0,0.35,0.02,0.7,0.05,1.06c0.01,0.12,0.03,0.24,0.04,0.36c0.03,0.24,0.05,0.48,0.09,0.73
				c0,0.02,0,0.03,0.01,0.05c0.01,0.04,0.02,0.08,0.03,0.11c0.08,0.48,0.2,0.96,0.33,1.44c0.03,0.1,0.05,0.2,0.08,0.29
				c0.15,0.51,0.32,1.01,0.52,1.51c0.04,0.1,0.08,0.2,0.12,0.3c0.2,0.49,0.41,0.97,0.65,1.45c0.02,0.04,0.03,0.07,0.05,0.11
				c0.25,0.5,0.53,0.98,0.83,1.46c0.03,0.06,0.06,0.11,0.1,0.17c0.04,0.06,0.08,0.12,0.12,0.18c0.18,0.28,0.36,0.54,0.55,0.81
				c0.07,0.1,0.14,0.21,0.22,0.31c0.27,0.36,0.54,0.71,0.82,1.05c0.01,0.01,0.01,0.02,0.02,0.03c0.14,0.17,0.29,0.32,0.43,0.49
				c0.1,0.11,0.2,0.23,0.3,0.33c0.18,0.19,0.36,0.37,0.55,0.55c0.08,0.08,0.16,0.17,0.25,0.24c0,0,0,0,0.01,0.01
				c0.26,0.24,0.53,0.48,0.8,0.7c0.08,0.07,0.16,0.12,0.25,0.19c0.18,0.14,0.35,0.28,0.53,0.4c0.02,0.01,0.04,0.02,0.05,0.03
				c0.31,0.22,0.63,0.43,0.96,0.61l53.96,31.15l-0.04,13.38c0,0.35,0.02,0.7,0.05,1.06c0.01,0.12,0.03,0.24,0.04,0.36
				c0.03,0.24,0.05,0.48,0.09,0.73c0,0.02,0,0.03,0.01,0.05c0.01,0.04,0.02,0.08,0.03,0.11c0.08,0.48,0.2,0.96,0.33,1.44
				c0.03,0.1,0.05,0.2,0.08,0.29c0.15,0.51,0.32,1.01,0.52,1.51c0.04,0.1,0.08,0.2,0.12,0.3c0.2,0.49,0.42,0.97,0.66,1.45
				c0.02,0.03,0.03,0.07,0.05,0.1c0.25,0.5,0.53,0.99,0.83,1.47c0.03,0.05,0.06,0.11,0.09,0.17c0.04,0.06,0.08,0.12,0.12,0.18
				c0.18,0.28,0.36,0.55,0.55,0.82c0.07,0.1,0.14,0.21,0.22,0.31c0.27,0.36,0.54,0.71,0.83,1.05c0.01,0.01,0.01,0.02,0.02,0.03
				c0.14,0.16,0.28,0.32,0.43,0.48c0.1,0.11,0.2,0.23,0.3,0.34c0.17,0.18,0.36,0.36,0.54,0.53c0.09,0.08,0.17,0.17,0.26,0.26
				c0,0,0.01,0.01,0.01,0.01c0.26,0.24,0.53,0.47,0.8,0.7c0.08,0.06,0.16,0.12,0.24,0.18c0.18,0.14,0.35,0.28,0.54,0.41
				c0.02,0.01,0.04,0.02,0.05,0.03c0.31,0.22,0.63,0.43,0.96,0.61l45.71,26.39c0.28,0.16,0.56,0.31,0.83,0.43
				c0.01,0.01,0.03,0.01,0.04,0.02c0.09,0.04,0.17,0.07,0.26,0.11c0.2,0.08,0.39,0.17,0.58,0.23c0.11,0.04,0.21,0.07,0.31,0.1
				c0.17,0.05,0.34,0.1,0.5,0.14c0.11,0.03,0.21,0.04,0.32,0.06c0.16,0.03,0.31,0.05,0.46,0.07c0.11,0.01,0.21,0.02,0.31,0.03
				c0.15,0.01,0.3,0.01,0.44,0.01c0.1,0,0.2,0,0.29-0.01c0.15-0.01,0.29-0.03,0.43-0.05C224.05,289.01,224.14,289,224.23,288.98z"/>
			<g>
				<path className="st7" d="M269.39,160.54c1.45,0.84,2.63,2.89,2.63,4.55l-0.02,8.55c0,1.67-1.2,2.34-2.65,1.51L53.64,50.62
					c-1.45-0.84-2.63-2.88-2.62-4.55l0.02-8.55c0-1.67,1.19-2.35,2.64-1.51L269.39,160.54z"/>
			</g>
			<g>
				<polygon className="st9" points="281.95,170.21 290.41,165.3 289.94,329.15 281.49,334.06 		"/>
			</g>
			<g>
				<polygon className="st10" points="26.59,12.98 35.05,8.07 281.93,150.6 273.47,155.52 		"/>
			</g>
			<g>
				<path className="st11" d="M273.47,155.52c4.68,2.7,8.5,9.32,8.48,14.69l-0.46,163.85c-0.02,5.38-3.86,7.57-8.54,4.87L26.07,196.4
					c-4.68-2.7-8.5-9.32-8.48-14.69l0.46-163.85c0.02-5.38,3.86-7.57,8.54-4.87L273.47,155.52z M227.98,283.03l0.08-26.76
					c0.02-5.45-3.92-12.2-8.74-14.98l-19.26-11.12l0.1-35.13c0.02-5.45-3.92-12.19-8.75-14.98l-56.71-32.74l0.04-13.39
					c0.02-5.45-3.92-12.19-8.75-14.98l-45.7-26.39c-4.83-2.79-8.79-0.61-8.81,4.84l-0.08,26.77c-0.02,5.45,3.92,12.19,8.75,14.98
					l22,12.7l-0.1,35.13c-0.02,5.45,3.92,12.19,8.75,14.98l53.96,31.15l-0.04,13.38c-0.02,5.46,3.92,12.2,8.75,14.99l45.71,26.39
					C224.01,290.67,227.97,288.49,227.98,283.03 M272,173.65l0.02-8.55c0-1.67-1.18-3.72-2.63-4.55L53.68,36
					c-1.45-0.84-2.63-0.15-2.64,1.51l-0.02,8.55c0,1.67,1.17,3.71,2.62,4.55l215.71,124.54C270.8,175.99,271.99,175.32,272,173.65
					M41.79,40.74l0.02-8.55c0-1.67-1.17-3.71-2.62-4.55l-14.6-8.43c-1.44-0.83-2.63-0.15-2.64,1.51l-0.02,8.55
					c0,1.67,1.18,3.72,2.62,4.55l14.6,8.43C40.6,43.09,41.79,42.41,41.79,40.74"/>
			</g>
			<g>
				<path className="st2" d="M34.22,7.64c-0.09-0.04-0.17-0.07-0.25-0.11c-0.19-0.08-0.37-0.16-0.55-0.22c-0.1-0.04-0.2-0.06-0.3-0.09
					c-0.16-0.05-0.32-0.1-0.48-0.13c-0.1-0.02-0.21-0.04-0.31-0.06c-0.15-0.03-0.3-0.05-0.45-0.07c-0.1-0.01-0.2-0.02-0.3-0.03
					c-0.14-0.01-0.28-0.01-0.42-0.01c-0.1,0-0.19,0-0.28,0.01c-0.14,0.01-0.28,0.03-0.41,0.05C30.37,7,30.28,7.01,30.2,7.03
					c-0.14,0.03-0.28,0.08-0.42,0.12c-0.07,0.02-0.14,0.04-0.2,0.06c-0.2,0.08-0.39,0.17-0.58,0.27l-8.46,4.91
					c0.18-0.11,0.38-0.2,0.58-0.27c0.06-0.03,0.13-0.04,0.2-0.06c0.14-0.05,0.28-0.09,0.42-0.12c0.08-0.02,0.17-0.03,0.25-0.04
					c0.14-0.02,0.27-0.04,0.41-0.05c0.09-0.01,0.19-0.01,0.28-0.01c0.14,0,0.28,0,0.42,0.01c0.1,0.01,0.2,0.01,0.3,0.03
					c0.15,0.02,0.3,0.04,0.45,0.07c0.1,0.02,0.2,0.04,0.31,0.06c0.16,0.04,0.32,0.08,0.48,0.13c0.1,0.03,0.2,0.06,0.3,0.09
					c0.18,0.06,0.37,0.14,0.56,0.22c0.08,0.04,0.17,0.07,0.25,0.1c0.27,0.13,0.55,0.27,0.83,0.43l8.46-4.91
					c-0.27-0.15-0.53-0.29-0.79-0.41C34.25,7.65,34.23,7.64,34.22,7.64z"/>
				<path className="st2" d="M281.45,334.72c-0.01,0.13-0.01,0.26-0.03,0.39c-0.02,0.18-0.05,0.35-0.08,0.53
					c-0.02,0.11-0.03,0.22-0.05,0.33c-0.04,0.21-0.1,0.4-0.16,0.6c-0.02,0.06-0.03,0.12-0.05,0.18c-0.08,0.25-0.17,0.48-0.28,0.7
					c-0.11,0.24-0.24,0.46-0.37,0.67c-0.03,0.05-0.07,0.1-0.11,0.15c-0.11,0.15-0.22,0.3-0.34,0.43c-0.1,0.11-0.21,0.21-0.32,0.3
					c-0.05,0.05-0.1,0.1-0.16,0.15c-0.17,0.14-0.35,0.26-0.53,0.37l8.46-4.91c0.19-0.11,0.36-0.23,0.53-0.37
					c0.06-0.05,0.11-0.1,0.16-0.15c0.1-0.09,0.2-0.17,0.29-0.27c0.01-0.01,0.01-0.02,0.02-0.03c0.12-0.13,0.23-0.28,0.34-0.43
					c0.04-0.05,0.08-0.09,0.11-0.14c0.14-0.21,0.26-0.43,0.37-0.67c0,0,0-0.01,0.01-0.01c0.1-0.22,0.19-0.45,0.27-0.69
					c0.02-0.06,0.03-0.12,0.05-0.18c0.05-0.18,0.11-0.36,0.15-0.55c0-0.02,0-0.03,0.01-0.05c0.02-0.1,0.03-0.22,0.05-0.33
					c0.03-0.17,0.06-0.35,0.08-0.53c0.01-0.12,0.02-0.26,0.03-0.38c0.01-0.14,0.02-0.28,0.03-0.42c0-0.08,0-0.15,0-0.23l-8.46,4.91
					C281.49,334.29,281.47,334.5,281.45,334.72z"/>
				<path className="st2" d="M275.06,156.62c0.04,0.03,0.08,0.06,0.12,0.09c0.26,0.22,0.52,0.44,0.78,0.68c0.1,0.09,0.2,0.2,0.3,0.29
					c0.16,0.15,0.32,0.31,0.47,0.47c0.1,0.11,0.21,0.23,0.31,0.34c0.14,0.15,0.28,0.31,0.41,0.47c0.28,0.33,0.54,0.67,0.8,1.02
					c0.06,0.08,0.11,0.16,0.16,0.24c0.2,0.28,0.39,0.56,0.58,0.85c0.07,0.1,0.13,0.21,0.19,0.31c0.29,0.47,0.56,0.95,0.81,1.44
					c0.01,0.01,0.01,0.02,0.02,0.04c0.25,0.5,0.48,1,0.68,1.51c0.04,0.1,0.09,0.21,0.13,0.31c0.19,0.5,0.37,1,0.51,1.5
					c0.03,0.09,0.05,0.18,0.07,0.27c0.13,0.48,0.24,0.95,0.32,1.42c0.01,0.06,0.03,0.13,0.04,0.19c0.04,0.24,0.07,0.48,0.09,0.72
					c0.01,0.12,0.03,0.24,0.04,0.36c0.03,0.36,0.05,0.71,0.05,1.06l8.46-4.91c0-0.35-0.02-0.7-0.05-1.06
					c-0.01-0.12-0.03-0.24-0.04-0.36c-0.03-0.24-0.05-0.48-0.09-0.72c0-0.02,0-0.04-0.01-0.06c-0.01-0.04-0.02-0.09-0.03-0.13
					c-0.08-0.47-0.19-0.95-0.33-1.42c-0.02-0.09-0.05-0.18-0.07-0.26c-0.15-0.5-0.32-1-0.51-1.5c-0.04-0.1-0.08-0.21-0.13-0.31
					c-0.21-0.51-0.43-1.02-0.68-1.51c-0.01-0.01-0.01-0.02-0.02-0.04c-0.25-0.49-0.52-0.97-0.81-1.44c-0.03-0.06-0.06-0.12-0.1-0.17
					c-0.03-0.05-0.06-0.09-0.09-0.14c-0.19-0.29-0.38-0.58-0.58-0.86c-0.05-0.08-0.1-0.15-0.16-0.23c-0.26-0.35-0.52-0.69-0.8-1.02
					c-0.02-0.02-0.03-0.04-0.05-0.06c-0.12-0.14-0.24-0.27-0.37-0.41c-0.1-0.12-0.21-0.24-0.31-0.35c-0.15-0.16-0.31-0.31-0.47-0.47
					c-0.1-0.1-0.2-0.2-0.3-0.3c-0.01-0.01-0.02-0.02-0.03-0.03c-0.25-0.23-0.5-0.45-0.75-0.65c-0.04-0.03-0.08-0.06-0.12-0.09
					c-0.21-0.17-0.42-0.33-0.63-0.48c-0.01-0.01-0.03-0.02-0.04-0.03c-0.3-0.21-0.61-0.41-0.92-0.59l-8.46,4.92
					c0.31,0.18,0.62,0.38,0.92,0.59C274.61,156.27,274.84,156.44,275.06,156.62z"/>
			</g>
		</g>
		<g id="logo">
			<g>
				<path className="st7" d="M64.03,157.19c4.83,2.79,8.77,9.53,8.75,14.98l-0.04,13.39l56.71,32.74c4.83,2.79,8.77,9.53,8.75,14.98
					l-0.1,35.13l19.25,11.11c4.83,2.79,8.77,9.54,8.75,14.99l-0.08,26.76c-0.02,5.46-3.98,7.64-8.81,4.85l-45.71-26.39
					c-4.83-2.79-8.77-9.53-8.75-14.99l0.04-13.38l-53.96-31.15c-4.83-2.79-8.77-9.53-8.75-14.98l0.1-35.13l-22-12.7
					c-4.83-2.79-8.77-9.53-8.75-14.98l0.08-26.77c0.02-5.45,3.98-7.63,8.81-4.84L64.03,157.19z"/>
			</g>
			<path className="st12" d="M174.51,288.53c-0.01-0.12-0.03-0.24-0.04-0.36c-0.03-0.24-0.05-0.48-0.09-0.72c0-0.02,0-0.03-0.01-0.05
				c-0.01-0.04-0.02-0.08-0.03-0.11c-0.09-0.48-0.2-0.96-0.33-1.45c-0.03-0.1-0.05-0.2-0.08-0.29c-0.15-0.51-0.32-1.01-0.52-1.52
				c-0.04-0.1-0.08-0.2-0.12-0.3c-0.2-0.49-0.42-0.97-0.66-1.45c-0.02-0.03-0.03-0.07-0.05-0.1c-0.25-0.5-0.54-0.99-0.83-1.47
				c-0.03-0.05-0.06-0.11-0.09-0.17c-0.04-0.06-0.08-0.11-0.12-0.17c-0.18-0.28-0.36-0.55-0.55-0.82c-0.07-0.1-0.14-0.21-0.21-0.31
				c-0.27-0.36-0.54-0.71-0.83-1.05c-0.01-0.01-0.02-0.02-0.02-0.03c-0.14-0.16-0.28-0.32-0.43-0.48c-0.1-0.11-0.2-0.23-0.3-0.34
				c-0.17-0.18-0.35-0.35-0.53-0.53c-0.09-0.09-0.17-0.18-0.26-0.26c0,0-0.01-0.01-0.01-0.01c-0.26-0.24-0.53-0.47-0.8-0.69
				c-0.08-0.06-0.16-0.12-0.23-0.18c-0.18-0.14-0.36-0.28-0.54-0.41c-0.02-0.01-0.04-0.02-0.05-0.03c-0.31-0.22-0.63-0.43-0.95-0.61
				l-19.25-11.11l0.1-35.13c0-0.35-0.02-0.7-0.05-1.06c-0.01-0.12-0.03-0.25-0.05-0.37c-0.03-0.24-0.05-0.47-0.09-0.71
				c0-0.02,0-0.03-0.01-0.05c-0.01-0.04-0.02-0.08-0.03-0.11c-0.08-0.48-0.2-0.96-0.33-1.44c-0.03-0.1-0.05-0.2-0.08-0.3
				c-0.15-0.51-0.32-1.01-0.52-1.51c-0.04-0.1-0.08-0.2-0.12-0.3c-0.2-0.49-0.41-0.97-0.65-1.44c-0.02-0.04-0.03-0.07-0.05-0.11
				c-0.25-0.5-0.53-0.98-0.83-1.46c-0.03-0.05-0.06-0.11-0.09-0.17c-0.04-0.06-0.08-0.12-0.12-0.18c-0.18-0.28-0.36-0.55-0.55-0.81
				c-0.07-0.1-0.14-0.21-0.22-0.31c-0.27-0.36-0.54-0.71-0.82-1.05c-0.01-0.01-0.01-0.02-0.02-0.03c-0.14-0.17-0.29-0.33-0.44-0.49
				c-0.1-0.11-0.19-0.22-0.29-0.33c-0.18-0.19-0.36-0.36-0.55-0.54c-0.08-0.08-0.17-0.17-0.25-0.25c0,0-0.01-0.01-0.01-0.01
				c-0.26-0.24-0.53-0.47-0.8-0.7c-0.08-0.07-0.16-0.12-0.24-0.19c-0.18-0.14-0.35-0.28-0.53-0.41c-0.02-0.01-0.04-0.02-0.05-0.03
				c-0.31-0.22-0.63-0.43-0.96-0.61L81.2,180.64l0.04-13.39c0-0.35-0.02-0.7-0.05-1.06c-0.01-0.12-0.03-0.25-0.05-0.37
				c-0.03-0.24-0.05-0.47-0.09-0.71c0-0.02,0-0.03-0.01-0.05c-0.01-0.04-0.02-0.08-0.03-0.11c-0.08-0.48-0.2-0.96-0.33-1.44
				c-0.03-0.1-0.05-0.2-0.08-0.3c-0.15-0.51-0.32-1.01-0.52-1.51c-0.04-0.1-0.08-0.2-0.12-0.3c-0.2-0.49-0.41-0.97-0.65-1.44
				c-0.02-0.04-0.03-0.07-0.05-0.11c-0.25-0.5-0.53-0.98-0.83-1.46c-0.03-0.05-0.06-0.11-0.09-0.17c-0.04-0.06-0.08-0.12-0.12-0.18
				c-0.18-0.28-0.36-0.55-0.55-0.82c-0.07-0.1-0.14-0.21-0.22-0.31c-0.27-0.36-0.54-0.71-0.83-1.05c-0.01-0.01-0.01-0.02-0.02-0.03
				c-0.14-0.17-0.29-0.33-0.44-0.49c-0.1-0.11-0.19-0.22-0.29-0.33c-0.18-0.19-0.36-0.36-0.55-0.54c-0.08-0.08-0.17-0.17-0.25-0.25
				c0,0-0.01-0.01-0.01-0.01c-0.26-0.24-0.53-0.47-0.8-0.7c-0.08-0.07-0.16-0.12-0.25-0.19c-0.18-0.14-0.35-0.28-0.53-0.4
				c-0.02-0.01-0.04-0.02-0.05-0.03c-0.31-0.22-0.63-0.43-0.96-0.61l-45.71-26.39c-0.28-0.16-0.56-0.31-0.83-0.43
				c-0.01-0.01-0.03-0.01-0.04-0.02c-0.09-0.04-0.17-0.07-0.26-0.11c-0.2-0.08-0.39-0.17-0.58-0.23c-0.11-0.04-0.21-0.07-0.31-0.1
				c-0.17-0.05-0.34-0.1-0.5-0.14c-0.11-0.03-0.21-0.04-0.32-0.06c-0.16-0.03-0.31-0.05-0.46-0.07c-0.11-0.01-0.21-0.02-0.31-0.03
				c-0.15-0.01-0.3-0.01-0.44-0.01c-0.1,0-0.2,0-0.29,0.01c-0.15,0.01-0.29,0.03-0.43,0.05c-0.09,0.01-0.18,0.03-0.27,0.04
				c-0.15,0.03-0.29,0.08-0.44,0.13c-0.07,0.02-0.14,0.04-0.21,0.07c-0.21,0.08-0.41,0.17-0.6,0.28l-8.46,4.91
				c0.19-0.11,0.39-0.2,0.6-0.28c0.07-0.03,0.14-0.04,0.21-0.07c0.14-0.05,0.29-0.09,0.44-0.13c0.09-0.02,0.18-0.03,0.26-0.04
				c0.14-0.02,0.28-0.04,0.43-0.05c0.1-0.01,0.2-0.01,0.3-0.01c0.14,0,0.29,0,0.44,0.01c0.1,0.01,0.21,0.02,0.31,0.03
				c0.15,0.02,0.31,0.04,0.46,0.07c0.11,0.02,0.21,0.04,0.32,0.06c0.16,0.04,0.33,0.09,0.5,0.14c0.1,0.03,0.21,0.06,0.31,0.1
				c0.19,0.07,0.39,0.15,0.58,0.23c0.09,0.04,0.17,0.07,0.25,0.11c0.29,0.13,0.58,0.28,0.87,0.45l45.71,26.39
				c0.32,0.19,0.64,0.39,0.95,0.61c0.2,0.14,0.39,0.29,0.59,0.44c0.08,0.06,0.16,0.12,0.24,0.18c0.27,0.22,0.54,0.46,0.81,0.7
				c0.08,0.07,0.15,0.15,0.23,0.23c0.19,0.18,0.38,0.36,0.56,0.56c0.1,0.11,0.2,0.23,0.3,0.34c0.15,0.17,0.3,0.33,0.45,0.51
				c0.29,0.34,0.56,0.69,0.83,1.05c0.08,0.1,0.15,0.21,0.22,0.31c0.19,0.27,0.37,0.54,0.55,0.81c0.07,0.11,0.14,0.23,0.21,0.34
				c0.29,0.48,0.57,0.97,0.83,1.46c0.02,0.04,0.03,0.07,0.05,0.11c0.24,0.48,0.45,0.96,0.65,1.45c0.04,0.1,0.08,0.2,0.12,0.3
				c0.2,0.5,0.37,1.01,0.52,1.51c0.03,0.1,0.05,0.19,0.08,0.29c0.13,0.48,0.25,0.97,0.33,1.45c0.01,0.05,0.02,0.1,0.03,0.15
				c0.04,0.24,0.07,0.49,0.09,0.73c0.01,0.12,0.03,0.24,0.04,0.36c0.03,0.36,0.05,0.71,0.05,1.06l-0.04,13.39l56.71,32.74
				c0.32,0.19,0.64,0.39,0.96,0.61c0.2,0.14,0.39,0.29,0.58,0.44c0.08,0.06,0.16,0.12,0.24,0.19c0.27,0.22,0.54,0.46,0.81,0.7
				c0.09,0.08,0.17,0.17,0.25,0.25c0.18,0.18,0.37,0.35,0.55,0.54c0.1,0.11,0.2,0.22,0.3,0.33c0.15,0.17,0.31,0.34,0.46,0.52
				c0.29,0.34,0.56,0.69,0.83,1.05c0.07,0.1,0.14,0.21,0.22,0.31c0.19,0.27,0.37,0.54,0.55,0.82c0.07,0.11,0.14,0.23,0.21,0.35
				c0.29,0.48,0.57,0.97,0.83,1.46c0.02,0.04,0.03,0.07,0.05,0.11c0.24,0.48,0.45,0.96,0.65,1.45c0.04,0.1,0.09,0.2,0.12,0.3
				c0.2,0.5,0.37,1.01,0.52,1.51c0.03,0.1,0.05,0.2,0.08,0.3c0.13,0.48,0.25,0.97,0.33,1.44c0.01,0.05,0.02,0.11,0.03,0.16
				c0.04,0.24,0.07,0.48,0.09,0.72c0.01,0.12,0.03,0.24,0.04,0.36c0.03,0.36,0.05,0.71,0.05,1.06l-0.1,35.13l19.25,11.11
				c0.32,0.19,0.64,0.39,0.95,0.61c0.2,0.14,0.4,0.29,0.59,0.44c0.08,0.06,0.16,0.12,0.24,0.18c0.27,0.22,0.54,0.46,0.81,0.7
				c0.09,0.08,0.17,0.17,0.26,0.26c0.18,0.17,0.36,0.35,0.54,0.53c0.1,0.11,0.19,0.22,0.29,0.33c0.15,0.17,0.31,0.34,0.46,0.52
				c0.29,0.34,0.56,0.69,0.82,1.05c0.07,0.1,0.14,0.21,0.22,0.31c0.19,0.27,0.37,0.54,0.55,0.82c0.07,0.11,0.14,0.23,0.21,0.34
				c0.29,0.48,0.57,0.97,0.83,1.47c0.02,0.03,0.03,0.07,0.05,0.1c0.24,0.48,0.46,0.96,0.66,1.45c0.04,0.1,0.09,0.2,0.13,0.31
				c0.2,0.5,0.37,1.01,0.52,1.51c0.03,0.1,0.05,0.2,0.08,0.29c0.13,0.48,0.25,0.97,0.33,1.45c0.01,0.05,0.02,0.11,0.03,0.16
				c0.04,0.24,0.07,0.48,0.09,0.72c0.01,0.12,0.03,0.24,0.05,0.36c0.03,0.36,0.05,0.71,0.05,1.06l-0.08,26.76
				c0,0.23-0.02,0.45-0.03,0.66c-0.01,0.13-0.01,0.25-0.03,0.38c-0.02,0.19-0.05,0.37-0.08,0.55c-0.02,0.1-0.03,0.21-0.05,0.31
				c-0.05,0.22-0.1,0.43-0.17,0.64c-0.01,0.05-0.02,0.1-0.04,0.14c-0.08,0.25-0.17,0.48-0.28,0.7c-0.11,0.24-0.24,0.47-0.37,0.67
				c-0.03,0.04-0.06,0.07-0.08,0.11c-0.12,0.17-0.23,0.33-0.37,0.47c-0.1,0.11-0.21,0.21-0.32,0.31c-0.05,0.05-0.1,0.1-0.16,0.15
				c-0.17,0.14-0.35,0.26-0.54,0.37l8.46-4.91c0.19-0.11,0.37-0.24,0.54-0.37c0.06-0.05,0.11-0.1,0.16-0.15
				c0.1-0.09,0.21-0.18,0.3-0.28c0.01-0.01,0.01-0.02,0.02-0.03c0.13-0.15,0.25-0.31,0.37-0.47c0.03-0.04,0.06-0.07,0.08-0.11
				c0.14-0.21,0.26-0.44,0.37-0.68c0-0.01,0.01-0.01,0.01-0.02c0.1-0.22,0.19-0.45,0.27-0.69c0.01-0.04,0.02-0.09,0.04-0.14
				c0.06-0.19,0.12-0.39,0.16-0.6c0-0.01,0-0.03,0.01-0.04c0.02-0.1,0.03-0.21,0.05-0.31c0.03-0.18,0.06-0.36,0.08-0.55
				c0.01-0.12,0.02-0.25,0.03-0.38c0.01-0.14,0.03-0.28,0.03-0.43c0-0.08,0-0.15,0-0.23l0.08-26.76
				C174.56,289.24,174.55,288.89,174.51,288.53z"/>
		</g>
	</svg>
	<footer id="footer">
		<div id="aboutUs-footer">
			<button className="about-us-btn">Our Story</button>
		</div>
		<div id="assist-footer">
			<button className="assist-btn">Need an Assistant? Get help!</button>
		</div>
	</footer>
    </>
    )
}
