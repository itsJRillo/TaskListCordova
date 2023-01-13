/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

const items = {};
localStorage.setItem("item", JSON.stringify(items));

function addToList(){ 
    let item = "";

    while(item == null || item == ""){
        item = prompt("Enter a name for the item: ");
    }

    var elem = $(
        "<li> <div>" +
            "<a href='#' style='all: unset; font-weight: 600;' class='item'>"+ item +"</a> "+
            "<a href='#' style='all: unset;'> <button class='remove'>Remove Item</button> </a> "+
            "<a href='#editPage'> <button class='edit'>Edit Item</button> </a> "+
        "</div> </li>");

        localStorage.parse();
    items[item] = elem[0].innerHTML;

    $(".remove",elem).click((e) => {
        let item = $(e.target).parent().parent().parent();
        item.remove();
        localStorage.removeItem(item.val());
        return false;		
    })

    $("ul").append(elem);
    
    localStorage.setItem("item", JSON.stringify(items));
    $("ul").listview("refresh");
}

function editItem(){
    let newItemName = $("#newLabel").val();
    console.log(newItemName)
    $(".item").html(newItemName);
    window.location = "#";
}