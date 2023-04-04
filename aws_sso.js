(function() {
    const createFilterBox = () => {
      const filterBox = document.createElement('input');
      filterBox.setAttribute('type', 'text');
      filterBox.setAttribute('placeholder', 'Filter AWS accounts...');
      filterBox.style.marginBottom = '10px';
      filterBox.style.width = '100%';
      filterBox.addEventListener('input', filterAccounts);
      filterBox.addEventListener('keydown', handleEnterKey);
      return filterBox;
    };
  
    const filterAccounts = (event) => {
      const searchString = event.target.value.toLowerCase();
      const accountElements = document.querySelectorAll('.saml-account');
      let firstVisibleAccount = null;
      
      accountElements.forEach(account => {
        const accountName = account.innerText.toLowerCase();
        if (accountName.includes(searchString)) {
          account.style.display = '';
          if (!firstVisibleAccount) {
            firstVisibleAccount = account;
          }
        } else {
          account.style.display = 'none';
        }
      });
  
      if (firstVisibleAccount) {
        firstVisibleAccount.querySelector('input[type="radio"]').checked = true;
      }
    };
  
    const handleEnterKey = (event) => {
      if (event.key === 'Enter') {
        const signInButton = document.querySelector('#signin_button');
        if (signInButton) {
          signInButton.click();
        }
      }
    };
  
    const filterBox = createFilterBox();
    const container = document.querySelector('#container');
    if (container) {
      container.insertBefore(filterBox, container.firstChild);
    }
  })();
