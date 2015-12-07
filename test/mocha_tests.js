/**
 * Created by Taylor on 12/6/2015.
 */

var assert = require("assert");
var fs = require("fs");
var expect = require('chai').expect;
var moment = require('moment');
var sleep = require('sleep').sleep;

describe('tree.js', function() {
    var tree = require('../tree.js');
    var newTree = tree.createNode('sentence');
    it('should initialize tree correctly', function(done){
        expect(newTree.data).to.be.deep.equal('sentence');
        expect(newTree.children).to.be.deep.equal([]);
        done();

    });

    it('should add child correctly', function(done) {
        var newNode = newTree.addChild('phrase');
        expect(newTree.children).to.be.deep.equal([newNode]);
        var newNode2 = newTree.addChild('another');
        expect(newTree.children).to.be.deep.equal([newNode,newNode2]);
        done();
    });

    it('should determine if node has children', function(done) {
        expect(newTree.hasChildren()).to.deep.equal(true);
        var newTree2 = tree.createNode('sentence');
        expect(newTree2.hasChildren()).to.deep.equal(false);
        done();
    });

    it('should not get a random child if there are no children', function(done) {
        var newTree3 = tree.createNode('sentence');
        expect(newTree3.getRandomChild()).to.deep.equal(undefined);
        done();
    });

    it('should have a random distribution when calling getRandomChild', function(done) {
        //should pass most of the time
        newTree.addChild('Adam Sandler');
        var counter = [0,0,0];
        var child1 = newTree.children[0];
        var child2 = newTree.children[1];
        var child3 = newTree.children[2];
        for (var i = 0; i < 100; i++) {
            var random = newTree.getRandomChild();
            if (random == child1){
                counter[0]++;
            } else if (random == child2) {
                counter[1]++;
            } else if (random == child3) {
                counter[2]++;
            }
        }
        counter.forEach(function(num) {
            expect(num).to.be.above(26);
            expect(num).to.be.below(40);
        });
        done();

    });



});
