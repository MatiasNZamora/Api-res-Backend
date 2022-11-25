export const querys = {
    getAllProducts: 'SELECT * FROM products',
    addNewProduct: 'INSERT INTO Products (Name, Description, Quantity) VALUES (@Name, @Description, @Quantity)',
    getProductById: 'SELECT * FROM products where Id = @Id',    
    getTotalProducts: 'SELECT COUNT(*) FROM [webstore].[dbo].[Products]',
    deleteProductById: 'DELETE FROM [webstore].[dbo].[Products] WHERE Id = @Id',
    updateProductById: 'UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @Id',
};


