---
publish: true
url: https://jltorre.github.io/samoo-public/clientes/k9v3m2/CODIGO-SCSS
proyecto: UMNG
---
``` scss
:root {
	--max-width: 1200px;
	--header-height: 15rem;
}

body#page-course-view-grid {
	div#page {
		padding-right: 0;
		#topofscroll {
			margin: 0 !important; padding: 0 !important;
			border-radius: 0;
			max-width: 100%;
			background-image: 
        linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)),
        url(https://umng.pentec.es/pluginfile.php/25/course/overviewfiles/curso.jpg);
	    background-size: 100%;
	    background-position: top;
	    background-repeat: no-repeat;
	    position: relative;
	    #page-header {
    		max-width: var(--max-width);
	    	h1 {
	    		color: #fff;
	    		margin-top: 5rem;
	    	}
	    }
	    .secondary-navigation {
	    	padding-bottom: 0;
	    	.navigation {
	    		background: transparent;
		    	.nav-tabs {
		    		max-width: var(--max-width);
		    		background: transparent;
		    		a {
		    			color: #fff;
		    		}
		    		.dropdown-menu {
		    			background: #000;
		    		}
		    		.nav-link {
		    			&.active {
		    				border-bottom: 5px solid #fff;
		    			}
		    			&:hover, &:focus {
		    				background: #000;
		    				color: #fff;
		    			}
		    		}
		    		.nav-item.show .nav-link {
		    			background: #000;
		    		}
		    	}
	    	}
	    }
	    #page-content {
	    	z-index: 999 !important;
	    	background: #fff;
	    	div[role="main"] {
		    	max-width: var(--max-width);
		    	margin: 0 auto;
		    	background: #fff;
	    	}
	    }
		}
	}
}
```