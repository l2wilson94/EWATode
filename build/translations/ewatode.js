// Auto-generated by some MotherTode
(() => {

			const global = window
			const scope = {}
			const term = (() => {
	global.EWATode = Term.term('EWATode', scope)
	return Term.subTerms(Term.string(''), [
['EWATode', Term.emit(Term.list([
		Term.term('EWATode.Magic', scope),
		Term.term('EWATode.MinorVersion', scope),
Term.term('EWATode.MajorVersion', scope),
Term.term('EWATode.CompileTag', scope),
Term.term('EWATode.Metadata', scope),
Term.term('EWATode.CodeIndex', scope),
Term.term('EWATode.Code', scope)
	]), ({output}) => output.match(/.{2}/g).join(" "))],
['Magic', Term.chain(Term.emit(Term.string(''), "02 03 07 41"), Term.term('Magic.HexNums', scope))],
['MinorVersion', Term.chain(Term.emit(Term.string(''), "00 01"), Term.term('MinorVersion.HexNums', scope))],
['MajorVersion', Term.chain(Term.emit(Term.string(''), "00 00"), Term.term('MajorVersion.HexNums', scope))],
['CompileTag', Term.chain(Term.emit(Term.string(''), "53 41 4e 44 50 4f 4e 44"), Term.term('CompileTag.HexNums', scope))],
['HexNums', Term.chain(Term.term('HexNums.Strip', scope), Term.many(Term.term('HexNums.HexNum', scope)))],
['HexNum', Term.list([Term.term('HexNum.HexNumDigit', scope), Term.term('HexNum.HexNumDigit', scope)])],
['HexNumDigit', Term.regExp(/[0-9A-Fa-f]/)],
['Strip', Term.maybe(Term.many(Term.or([
		Term.emit(Term.string(` `), ""),
		Term.regExp(/[^]/)
	])))],
['Metadata', Term.chain(Term.emit(Term.string(''), "00"), Term.term('Metadata.HexNums', scope))],
['CodeIndex', Term.chain(Term.emit(Term.string(''), "00 00"), Term.term('CodeIndex.HexNums', scope))],
['Code', Term.chain(Term.emit(Term.string(''), "00 00"), Term.term('Code.HexNums', scope))]
])
})()
			for (const key in term) {
				scope[key] = term[key]
			}
			return term
		
})()