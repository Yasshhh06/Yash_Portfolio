//after form submit text code
const scriptURL = 'https://script.google.com/macros/s/AKfycbyPA6wz70JEmJwnpyY3xnl6TxU7SjG9uMH1Nu95K1K9IewfAdE79abTBVEkNm6_I9PI/exec'
        const form = document.forms['submit-to-google-sheet']      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {console.log('Success!', response)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
