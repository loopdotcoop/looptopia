# https://github.com/LumaPictures/meteor-jquery-datatables/issues/50
# patch for jquery-datatables v1.0.5 for Meteor v0.8.3

DataTableComponent.prototype.oldRendered = DataTableComponent.prototype.rendered

DataTableComponent.prototype.rendered = ->
    that = this
    setTimeout ->
        that.oldRendered()
    , 0
    return

DataTableComponent.prototype.setQuery = (query) ->
    if @subscription
        @prepareQuery() unless @query
        #unless @query() is query
        if true
            @query query
            @rendered()

Template.DataTable.created = ->
    @.__component__ = @.__view__
    dataTableInstance = new DataTableComponent @