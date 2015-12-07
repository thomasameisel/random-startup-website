/**
 * Created by tommy on 12/6/15.
 */
var expect = require('chai').expect;
var generate_sentences = require('../generate_sentences');
var tree = require('../tree');

describe('tree', function() {

    function verifyNode(node,data) {
        expect(node.data).to.equal(data);
        expect(node.addChild).to.exist;
        expect(node.addChildNode).to.exist;
        expect(node.getRandomChild).to.exist;
        expect(node.hasChildren).to.exist;
    }

    it('all root\'s members are initialized correctly', function() {
        var data = 'data';
        var node = tree.createNode(data);

        expect(node.children.length).to.equal(0);
        verifyNode(node,data);
    });

    describe('addChild', function() {
        var childData = 'childData';
        var root;

        before(function() {
            root = tree.createNode('data');
            root.addChild(childData);
        });

        it('root has one child', function() {
            expect(root.children.length).to.equal(1);
        });

        it('child node\'s members are initialized correctly', function() {
            verifyNode(root.children[0],childData);
        });
    });

    describe('addChildNode', function() {
        var childData = 'childData';
        var root;
        var child;

        before(function() {
            root = tree.createNode('data');
            child = tree.createNode(childData);
            root.addChildNode(child);
        });

        it('root has one child', function() {
            expect(root.children.length).to.equal(1);
        });

        it('root\'s child is the correct node', function() {
            expect(root.children[0]).to.equal(child);
        });

        it('child node\'s members are initialized correctly', function() {
            verifyNode(root.children[0],childData);
        });
    });

    describe('hasChildren', function() {

        it('returns false when there are no children', function() {
            var root = tree.createNode('data1');
            expect(root.children.length).to.equal(0);
            expect(root.hasChildren()).to.be.false;
        });

        it('returns true when there are children', function() {
            var root = tree.createNode('data1');
            root.addChild('data2');
            root.addChild('data3');
            expect(root.children.length).to.equal(2);
            expect(root.hasChildren()).to.be.true;
        });
    });
});

describe('generate_sentences', function() {

    describe('capitalizeFirstLetter', function() {
        var lower = 'company';
        var upper = 'Company';

        it('should capitalize first letter', function() {
            var result = generate_sentences.capitalizeFirstLetter(lower);
            expect(result).to.equal(upper);
        });

        it('should keep first letter capital if already capitalized', function() {
            var result = generate_sentences.capitalizeFirstLetter(upper);
            expect(result).to.equal(upper);
        });
    });

    describe('lowercaseFirstLetter', function() {
        var lower = 'company';
        var upper = 'Company';
        var multipleUpper = 'COMPANY';
        var onlyFirstLower = 'cOMPANY';

        it('should lowercase first letter', function() {
            var result = generate_sentences.lowercaseFirstLetter(upper);
            expect(result).to.equal(lower);
        });

        it('should keep first letter lowercase if already lowercase', function() {
            var result = generate_sentences.lowercaseFirstLetter(lower);
            expect(result).to.equal(lower);
        });

        it('should not lowercase any letters besides the first', function() {
            var result = generate_sentences.lowercaseFirstLetter(multipleUpper);
            expect(result).to.equal(onlyFirstLower);
        });
    });

    describe('createTree', function() {
        var root;

        before(function() {
            var beginPhrases = [
                'Begin phrase 1',
                'Begin phrase 2',
                'Begin phrase 3'
            ];
            var endPhrases = [
                {
                    first: 'Middle phrase 1',
                    second: [
                        'End phrase 1',
                        'End phrase 2',
                        'End phrase 3',
                        'End phrase 4'
                    ]
                },
                {
                    first: 'Middle phrase 2',
                    second: [
                        'End phrase 1',
                        'End phrase 2',
                        'End phrase 3'
                    ]
                }
            ];
            var phrases = [beginPhrases, endPhrases];
            root = generate_sentences.createTree(phrases);
        });

        it('root should have children of begin phrases', function() {
            expect(root.children.length).to.equal(3);
            for (var i = 0; i < root.children.length; ++i) {
                expect(root.children[i].data).to.equal('Begin phrase ' + (i+1));
            }
        });

        it('begin phrase nodes should have children of middle phrases', function() {
            for (var i = 0; i < root.children.length; ++i) {
                expect(root.children[i].children.length).to.equal(2);
                for (var j = 0; j < root.children[i].children.length; ++j) {
                    expect(root.children[i].children[j].data).to.equal('Middle phrase ' + (j+1));
                    expect(root.children[i].children[j]).to.equal(root.children[(i+1)%3].children[j]);
                }
            }
        });

        it('middle phrase nodes should have children of end phrases', function() {
            expect(root.children[0].children[0].children.length).to.equal(4);
            expect(root.children[0].children[1].children.length).to.equal(3);
            for (var i = 0; i < root.children[0].children.length; ++i) {
                for (var j = 0; j < root.children[0].children[i].children.length; ++j) {
                    expect(root.children[0].children[i].children[j].data).to.equal('End phrase ' + (j+1));
                }
            }
        });

        it('end phrase nodes should not have children', function() {
            for (var i = 0; i < root.children[0].children.length; ++i) {
                for (var j = 0; j < root.children[0].children[i].children.length; ++j) {
                    expect(root.children[0].children[i].children[j].children.length).to.equal(0);
                }
            }
        });
    });

    describe('createSentence', function() {
        var sentence;

        before(function() {
            var beginPhrase = [
                'Begin phrase'
            ];
            var endPhrases = [
                {
                    first: 'Middle phrase',
                    second: [
                        'End phrase'
                    ]
                }
            ];
            var phrases = [beginPhrase, endPhrases];
            var root = generate_sentences.createTree(phrases);
            sentence = generate_sentences.createSentence(root);
        });

        it('sentence should be created properly', function() {
            expect(sentence).to.equal('Begin phraseMiddle phraseEnd phrase');
        })
    });
});
