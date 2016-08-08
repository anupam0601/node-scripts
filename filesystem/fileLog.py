# Logging the params and function name
import sys

def log(funcName,fun,*args):
	
	fun(*args)

	print funcName

	for i in args:
		print "parameters:",i

	

# First function
def funcOne(a):
	
	print "done one"

# Second function
def funcTwo(a,b):
	
	print "done two"


log("funcOne",funcOne,'one')

print ("\n")

log("funcTwo",funcTwo,'one','two')
