<template>
    <StackLayout ref="page">
        <StackLayout class="form">
            <StackLayout class="input-field">
                <TextField
                    :class="(this.onSubmit && this.profit.category == '')?'field invalid' : 'field'"
                    @tap="chooseCategory()"
                    editable="false"
                    hint="Category"
                    keyboardType="account"
                    returnKeyType="next"
                    v-model="profit.category"
                    autocorrect="false" required></TextField>
            </StackLayout>
            
            <StackLayout class="input-field">
                <TextField
                    :class="(this.onSubmit && this.profit.account == '')?'field invalid' : 'field'"
                    @tap="chooseAccount()"
                    editable="false"
                    hint="Account"
                    keyboardType="account"
                    returnKeyType="next"
                    v-model="profit.account"
                    autocorrect="false" required></TextField>
            </StackLayout>
            
            <StackLayout class="input-field">
                <TextField
                    :class="(this.onSubmit && this.profit.price == '')?'field invalid' : 'field'"
                    hint="Sum"
                    keyboardType="number"
                    returnKeyType="next"
                    v-model="profit.price"
                    autocorrect="false" required></TextField>
            </StackLayout>
            
            <StackLayout class="input-field">
                <TextField
                    :class="(this.onSubmit && this.profit.comment == '')?'field invalid' : 'field'"
                    hint="Comment"
                    keyboardType="comment"
                    returnKeyType="next"
                    v-model="profit.comment"
                    autocorrect="false" required></TextField>
            </StackLayout>
            
            <Button
                class="btn btn-primary"
                @tap="submit()">Add</Button>
        </StackLayout>
    </StackLayout>
</template>

<script>

export default {
    name: 'Profit',
    data() {
        return {
            onSubmit: false,
            profit: {
                category: '',
                account: '',
                price: '',
                comment: ''
            }
        }
    },
    computed: {
        accounts() {
            return this.$store.state.account.list;
        },
        categories() {
            return this.$store.state.profitCategory.list;
        }
    },
    mounted() {
        this.$store.dispatch('account/fetchAll');
        this.$store.dispatch('profitCategory/fetchAll');
    },
    methods: {
        submit() {
            var valid = true;
            this.onSubmit = true;
            
            valid = (this.profit.category == '') ? false : true;
            valid = (this.profit.account == '') ? false : true;
            valid = (this.profit.price == '') ? false : true;
            valid = (this.profit.comment == '') ? false : true;
            
            var data = {
                category: this.profit.category,
                account: this.profit.account,
                price: this.profit.price,
                comment: this.profit.comment,
                date: '30.12'
            }
            
            if(valid) {
                this.$store.dispatch('profit/add', data);

                this.$router.push({ name: 'ProfitList' });
            }
        },
        chooseCategory() {
            var _this = this;
            var array = this.categories;
            var flags = [], output = [], l = array.length, i;
            for( i=0; i<l; i++) {
                if( flags[array[i].title]) continue;
                flags[array[i].title] = true;
                output.push(array[i].title);
            }
            
            action("Choose Category", "Cancel", output)
            .then(result => {
                if(result != 'Cancel') {
                    _this.profit.category = result;
                }
            })
        },
        chooseAccount() {
            var _this = this;
            var array = this.accounts;
            var flags = [], output = [], l = array.length, i;
            for( i=0; i<l; i++) {
                if( flags[array[i].title]) continue;
                flags[array[i].title] = true;
                output.push(array[i].title);
            }
            
            action("Choose Account", "Cancel", output)
            .then(result => {
                if(result != 'Cancel') {
                    _this.profit.account = result;
                }
            })
        }
    }
}
</script>

<style>
.field {
    border-left-color: #ffffff; 
    border-left-width: 3;
    
    border-bottom-width: 1;
    border-bottom-color: #000000; 
}
.invalid {
    border-left-color: #ff5500; 
    border-left-width: 3;
    
    border-bottom-width: 1;
    border-bottom-color: #ff5500; 
}
</style>