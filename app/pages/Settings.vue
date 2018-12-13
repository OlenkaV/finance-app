<template>
    <StackLayout ref="page">
        <StackLayout class="form">
            <StackLayout class="input-field">
                <Label class="title" :text="$t('Language')"  col="1"/>
                <TextField
                    @tap="chooseLocale()"
                    editable="false"
                    hint="Language"
                    returnKeyType="exit"
                    v-model="locale"
                    autocorrect="false" required></TextField>
            </StackLayout>
        </StackLayout>
    </StackLayout>
</template>

<script>

export default {
    name: 'Settings',
    data() {
        return {
            locales: [
                {id: 'en', title: 'English' },
                {id: 'uk', title: 'Укріїнська'}
            ]
        }
    },
    computed: {
        locale() {
            var _this = this;
            for(var i in _this.locales) {
                if(this.locales[i].id == this.$store.state.app.locale) {
                    return this.locales[i].title
                }
            }
        }
    },
    methods: {
        chooseLocale() {
            var _this = this;
            var array = this.locales;
            var flags = [], output = [], l = array.length, i;
            for( i=0; i<l; i++) {
                if( flags[array[i].title]) continue;
                flags[array[i].title] = true;
                output.push(array[i].title);
            }
            
            action("Choose Your Language", "Cancel", output)
            .then(result => {
                if(result != 'Cancel') {
                    
                    _this.locales.forEach(function(i) {
                        if(i.title == result) {
                            _this.$store.dispatch('app/changeLocale', i.id);
                        }
                    })
                }
            })
        }
    }
}
</script>
