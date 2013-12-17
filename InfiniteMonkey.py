import random


def generateOne(strlen):
    alphabet = "abcdefghijklmnopqrstuvwxyz "
    res = ""
    for i in range(strlen):
        index = random.randrange(27)
        res = res + alphabet[index]

    return res

def score(goal, curString):
    match = 0;
    for i in range(len(goal)):
        if goal[i] == curString[i]:
            match = match + 1
    return float(match)/len(goal)

# print(score('testing my string', generateOne(28)))

def main():
    goalString = 'he'
    testString = generateOne(len(goalString))
    bestScore = 0
    newScore = score(goalString, testString)


    while newScore < 1:
        if newScore >= bestScore:
            print (newScore, testString)
            bestScore = newScore
            testString = generateOne(len(goalString))
            newScore = score(goalString, testString)
main()

